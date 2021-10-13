import { useEffect, useState } from "react";
import { Button, Grid,Label,Message} from "semantic-ui-react"
import { getRecentPosts } from "../api_utility/ApiRequests";
import PostCard from "./PostCard";

function RecentPosts ({perItemComputer, posts}) {

  const [recentPosts, setRecentPosts] = useState(posts)
  const [recentPostLoading, setRecentPostLoading] = useState(false)


  useEffect(() => {

    recentPostsApiRequest(posts.meta.path)

  }, [])


const recentPostsApiRequest = async (url) =>{

  setRecentPostLoading(true)
  const recentPosts = await getRecentPosts(url)

  // console.log(recentPosts)

    if(recentPosts) {
      setRecentPostLoading(false)
      setRecentPosts(recentPosts)
    }

}



      if(!recentPosts.data) {
        return(
              <Message info>
                Waiting to Build...
              </Message>
              )
      }

      if(recentPostLoading) {
        return(
          <Message info>
            Collecting Data...
          </Message>
          )
      }

          return(
            <>
              <Label ribbon color="grey">Recent Posts - Page # { recentPosts.meta.current_page}</Label>
            <Grid>
              <Grid.Row>
                {
                  recentPosts.data.map( post => {
                    return(
                      <Grid.Column computer={perItemComputer} tablet="8" key={post.id}>
                        <PostCard post={post}/>
                      </Grid.Column>
                    )
                  })
                  }              
              </Grid.Row>

              <Grid.Row>
                  <Button 
                      color="violet" 
                      onClick={ () => recentPostsApiRequest(recentPosts.links.prev) }
                      disabled={ !recentPosts.links.prev}
                      >
                      Load Prev
                  </Button>
                                      

                  <Button 
                    color="vk" 
                    onClick={ () => recentPostsApiRequest(recentPosts.links.next) }
                    disabled={ !recentPosts.links.next}
                  >
                                
                  Load More

                  </Button>

              </Grid.Row>

            </Grid>
            </>
          )
}

export default RecentPosts;