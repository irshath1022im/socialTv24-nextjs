
import { Card, Container, Grid,  Icon, Label, Message , Image} from "semantic-ui-react"
import ReactHtmlParser from 'react-html-parser';
import { getPost, getRecentPosts} from "../../api_utility/ApiRequests";
import RelativePosts from "../../components/RelativePosts";
import Head from 'next/head'
import { useRouter } from "next/dist/client/router";



const singlePost = ({selectedPost, subCategoryId}) => {
  
const router = useRouter()

console.log(router)
    

    return(
        <Container>
            <Head>
                <title>Page-{router.query.id}</title>
            </Head>

            <Grid>
                <Grid.Row>

                    <Grid.Column mobile="16" tablet="10" computer="8">

                      {          
                        !selectedPost ?

                            <Message info>
                                Loading content....
                            </Message>
                         :
                        <>
                                        <Card.Header as="h4">
                                        {selectedPost.title}
                                        </Card.Header>

                                        <Image src={`http://socialtv24.info//storage/${selectedPost.thumbnail}`} alt="news1" />

                                        <Card.Description>
                                        { ReactHtmlParser(selectedPost.content)}


                                    
                                        </Card.Description>

                                    
                                        <Card.Content extra>
                                        
                                                    <Label color="violet" size="small"> 202-09-2021</Label>
                                            
                                    
                                            <Icon color="blue" name="facebook f" size="small" link={true}></Icon>
                                            <Icon color="green" name="whatsapp" size="small" link={true}></Icon>
                                    
                                        </Card.Content>
                            </>
                        }

                     </Grid.Column>
                    



                    <Grid.Column  mobile="16" tablet="6" computer="8">
                        <Label ribbon color="purple">Relative Posts</Label>
                        <Grid>
                            <Grid.Row>
                              

                                    <Grid.Column mobile="16" tablet="16">

                                        {
                                        subCategoryId &&
                                        <RelativePosts  subCategoryId={subCategoryId}/>
                                        }
                                    </Grid.Column>
                                
                            </Grid.Row>
                        </Grid>

                        {/* <Pagination
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={10}
                            /> */}
                            
                   

                    </Grid.Column>


                </Grid.Row>
            </Grid>

                    
        </Container>
    )
}



export async function getStaticProps(context) {

    // console.log(context)
    const postId = context.params.id
    // console.log(postId)
   
    const post = await getPost(postId)

    // const relativePosts = await getRelativePosts(post.subCategoryId);

    // console.log(!response)

    return {
        props: {
            selectedPost: post,
            subCategoryId: post.subCategoryId,
        }
    }

}


export async function getStaticPaths(context) {
 
    const recentPostsUrl = `${process.env.NEXT_PUBLIC_API_SERVER}/recentPosts`
    const recentPosts = await getRecentPosts(recentPostsUrl);

    const paths = []

    recentPosts.data.map( post => paths.push({ params: { id: `${post.id}`}}))

    return {
        paths : paths,
        fallback: true,
    }
}

export default  singlePost;