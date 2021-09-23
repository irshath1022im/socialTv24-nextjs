import { Card, Container, Grid, Icon, Image, Label, Pagination } from "semantic-ui-react"
import RecentPostCard from "../components/RecentPostCard"


export default () => {
    return(
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column mobile="16" tablet="11" computer="12">
                        <Card.Header as="h4">
                        സ്ട്രോങ് റൂമിൽ കോടികളുടെ ആനക്കൊമ്പ്; കത്തിക്കുമോ കാണ്ടാമൃഗക്കൊമ്പു പോലെ?...
                        </Card.Header>

                        <Image src="/images/news1.jpg" />

                        <Card.Description>
                        2409 കാണ്ടാമൃഗക്കൊമ്പുകൾ അസം സർക്കാർ കൂട്ടിയിട്ടു കത്തിക്കുന്നത് കണ്ടതോടെ പഴയൊരു ശുപാർശ പൊടി തട്ടിയെ...


                       
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


        </Container>
    )
}