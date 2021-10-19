
// import axios from 'axios'
import {  useState,useEffect } from 'react'
import {  Embed, Grid, Label} from 'semantic-ui-react'
// import JanazaPosts from './components/JanazaPosts'
import RecentPosts from '../components/RecentPosts'
import TopNews from '../components/TopNews'
import {  getLiveVideo, getRecentPosts, getTopNews } from '../api_utility/ApiRequests'



function Home(props) {

  const [live, setLive] = useState(false)

  useEffect(() => {

    if(props.liveVideos.length > 0) {
      setLive(true)
    }

  }, [])

      return (


            <Grid>
              
                <Grid.Row>
                  {
                    live &&
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                      <Label ribbon color="red">Live</Label>
                      <Embed
                          source="youtube"
                          iframe={props.liveVideos[0].description}
                          placeholder="/images/banner.jpeg"
                      />
                      
                    </Grid.Column>
                  }

                    <Grid.Column mobile={16} tablet={8} computer={8}>

                        <Label ribbon color="grey">TopNews</Label>

                            {
                              props.topNews.map( (item,key) =>{
                                return(

                                <TopNews news={item} key={key}/>

                              )
                            })
                          }

                    </Grid.Column>

              
                    <Grid.Column mobile="16" tablet={ live ? 16 : 8 } computer={live ? 16 : 8} >
                      
                        
                          <RecentPosts perItemComputer={live ? 4 : 8} posts={props.recentPosts} />
                      
                    </Grid.Column>

                </Grid.Row>

                <hr />

                  {/* <Grid.Row columns="2">
                  <Label ribbon color="grey">Janaza Posts</Label>

                    <Grid.Column tablet={16}>
                        <JanazaPosts />           
                      </Grid.Column>
                  </Grid.Row> */}

                  <hr />

                  {/* <Grid.Row columns="2">
                        <Label ribbon color="grey">Our Videos</Label>

                          <Grid.Column tablet={16}>
                              <RecentVideos /> 
                            </Grid.Column>
                  </Grid.Row> */}


            </Grid>

        

      )

  }

export async function getStaticProps() {
   
  const recentPostsUrl = `${process.env.NEXT_PUBLIC_API_SERVER}/recentPosts`

  // console.log(recentPostsUrl)

      const topNews = await getTopNews()
      const recentPosts = await getRecentPosts(recentPostsUrl)
      const liveVideos = await getLiveVideo();

          return {
            props: {
              topNews : topNews,
              recentPosts: recentPosts,
              liveVideos
          },
          revalidate: 60
        }
  }

export default Home;
