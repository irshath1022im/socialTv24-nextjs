
// import axios from 'axios'
import { useState } from 'react'
import {   Card, Embed, Grid, Image, Label, Pagination, Icon } from 'semantic-ui-react'
import JanazaPosts from './components/JanazaPosts'
import RecentPosts from './components/RecentPosts'
// import RecentPosts from './components/RecentPosts'
// import RecentVideos from './components/RecentVideos'
// import TopNews from './components/TopNews'
import RecentVideos from './components/Videos/RecentVideos'
import Link from 'next/link'
import axios from 'axios'


function Home(props) {
  // console.log(props)
 

  const [live, setLive] = useState(false)

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

                    {
                      props.topNews.map( (item,key) =>{
                        return(

                          <Card fluid={true} key={key}>
                            <Image src="/images/topNews1.jpg" />
                            <Card.Content>
                                <Card.Header>
                                        {item.title}
                                </Card.Header>

                                <Card.Meta>
                                  {item.posted}
                                </Card.Meta>

                                <Card.Description>
                                  {item.description}
                                    <Link href={`/posts/${item.id}`}>
                                        <Label color="blue" as="a">Read More</Label>
                                    </Link>
                                </Card.Description>
                                </Card.Content>

                                <Card.Content extra>
                                            <a>
                                    <Icon name='user' />
                                    22 Friends
                                </a>
                                </Card.Content>

                

                                  </Card>          

                      )
                    })
                  }

                    </Grid.Column>
{/* 
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
                    </Grid.Column> */}
                    
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
    // const result = await axios.get('http://localhost:3000/api/topNews');
    // console.log('getStaticProps in Home ')
    // const response = await result.data

    const url = 'http://localhost:8000/api/topNews';

    const response = await axios.get(url)
    const result = await response.data

    // console.log(result)
   

          return {
            props: {
              topNews : result
              
              // [
              //   { 
              // title: 'TOP NEWS ‘‘ഞാൻ കണ്ടത് എന്റെ കുട്ടികൾ കാണേണ്ട’’: ദുരിതമൊഴിയാതെ അഫ്ഗാൻ അഭയാർഥികൾ...',
              // description: '‘‘മാതൃരാജ്യം വിടാൻ ആരാണ് ഇഷ്ടപ്പെടുക? മടങ്ങിപ്പോകണമെന്നാണ് ആഗ്രഹം, എന്നാൽ താലിബാനിൽ വിശ്വാസമില്ല. അവ...',
              // posted: '2021-09-2585'
              //     },
              // { 
              //   title: 'NEWS 2',
              //   description: 'Testing News',
              //   posted: '2021-10-01'
              //       }
                
              //   ]
          },
          revalidate: 10
         
          
        }
  }

export default Home;
