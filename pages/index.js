
import { useState } from 'react'
import {   Embed, Grid, Label, Pagination,  } from 'semantic-ui-react'
import JanazaPosts from './components/JanazaPosts'
import RecentPosts from './components/RecentPosts'
// import RecentPosts from './components/RecentPosts'
// import RecentVideos from './components/RecentVideos'
import TopNews from './components/TopNews'
import RecentVideos from './components/Videos/RecentVideos'

export default function Home() {

  const [live, setLive] = useState(true)

  return (


        <Grid>
          
            <Grid.Row>
              {
                live &&
                <Grid.Column mobile={16} tablet={8} computer={8}>
                   <Label ribbon color="red">Live</Label>
                   <Embed
                      source="youtube"
                      iframe=""
                      placeholder="/images/banner.jpeg"
                   />
                   
                </Grid.Column>
              }

                <Grid.Column mobile={16} tablet={8} computer={8}>
                <Label ribbon color="grey">TopNews</Label>
                    <TopNews />           
                </Grid.Column>

                <Grid.Column mobile="16" tablet={ live ? 16 : 8 } computer={live ? 16 : 8} >
                <Label ribbon color="grey">Recent Posts</Label>
                    <RecentPosts perItemComputer={live ? 4 : 8} />
                    <Pagination
                      boundaryRange={0}
                      defaultActivePage={1}
                      ellipsisItem={null}
                      firstItem={null}
                      lastItem={null}
                      siblingRange={1}
                      totalPages={10}
                    />
                </Grid.Column>
                
            </Grid.Row>

            <hr />

              <Grid.Row columns="2">
              <Label ribbon color="grey">Janaza Posts</Label>

                <Grid.Column tablet={16}>
                    <JanazaPosts />           
                  </Grid.Column>
              </Grid.Row>

              <hr />

              <Grid.Row columns="2">
              <Label ribbon color="grey">Our Videos</Label>

                <Grid.Column tablet={16}>
                    <RecentVideos /> 
                  </Grid.Column>
              </Grid.Row>


        </Grid>

      //  <Segment>
      //       <Header textAlign="center">
      //         <Header.Content>RECENT POSTS</Header.Content>
      //       </Header>
      //         <RecentPosts />
            
      //     </Segment>

      //     <Segment>
      //       <Header textAlign="center">
      //         <Header.Content>RECENT VIDEOS</Header.Content>
      //       </Header>
             
      //       <RecentVideos />
            
      //     </Segment>



          
      //     <Segment>
      //       <h4>FB Posts</h4>
      //     </Segment>

      //     <Segment>
      //       <h4>Our Ads</h4>
      //     </Segment>

      //     <Segment>
      //       <h4>Tutors</h4>
      //     </Segment>

      //     <Segment>
      //       <h4>footer</h4>
      //     </Segment>

  )
}
