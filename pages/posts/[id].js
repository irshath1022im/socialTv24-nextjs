import axios from "axios";
import { Card, Container, Grid, Icon, Image, Label, Message, Pagination } from "semantic-ui-react"
import RecentPostCard from "../components/RecentPostCard"


const singlePost = (props) => {
    // console.log(props)
    
    return(
        <Container>

            {
                !props ?

                <Message>
                    Loading Content....
                </Message>

                :

          

            <Grid>
                <Grid.Row>
                    <Grid.Column mobile="16" tablet="11" computer="12">
                        <Card.Header as="h4">
                        {props.title}
                        </Card.Header>

                        <Image src={`http://socialtv24.info//storage/${props.thumbnail}`} alt="news1" />

                        <Card.Description>
                        {props.content}


                       
                        </Card.Description>

                      
                        <Card.Content extra>
                           
                                    <Label color="purple">202-09-2021</Label>
                            
                      
                            <Icon color="blue" name="facebook " size="big" link={true}></Icon>
                            <Icon color="green" name="whatsapp" size="big" link={true}></Icon>
                       
                        </Card.Content>

                    </Grid.Column>



                    <Grid.Column  mobile="16" tablet="5" computer="4">
                    <Label ribbon color="teal">Recent Posts</Label>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column mobile="8" tablet="16">
                                    <RecentPostCard />
                                </Grid.Column>

                                <Grid.Column mobile="8" tablet="16">
                                    <RecentPostCard />
                                </Grid.Column>

                                <Grid.Column mobile="8" tablet="16">
                                    <RecentPostCard />
                                </Grid.Column>

                                <Grid.Column mobile="8" tablet="16">
                                    <RecentPostCard />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

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
            </Grid>

        }
        </Container>
    )
}


export async function getStaticProps(context) {

    // console.log(context)
    const postId = context.params.id
    // console.log(postId)
    const url = `http://localhost:8000/api/posts/${postId}`;

    const result = await axios.get(url)
    const response = await result.data

    // console.log(response)
    return {
        props: response
    }

}

export async function getStaticPaths() {
 
    return {
        paths : [
            { params : { id : '1'} },
            { params : { id : '2'} },
            { params : { id : '3'} },
        ],

            fallback: true
        }

}


export default singlePost;