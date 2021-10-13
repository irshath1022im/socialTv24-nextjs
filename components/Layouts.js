import { Container, Grid, Header, Image, Segment } from 'semantic-ui-react'
import Navigation from './Navigation'
import Head from 'next/head'

export default function Layouts ({children}) {
    return(
        <>
            <Container>
                <Head>
                    <title>SocialTV24</title>
                </Head>
                <Segment>
                    
                    {/* <Image src="/images/banner.jpeg" fluid /> */}

                    <Grid>
                        <Grid.Row className="background1">
                            <Grid.Column width="4" >
                                <Image src="/images/logo.jpg" alt="logo"  fluid={true} />
                            </Grid.Column>

                            <Grid.Column width="12" className="header-part-2">
                                
                                <Grid.Row className="header-row-1">
                                    <Grid.Column width="16" >
                                        நாளாந்தம்  உடனுக்குடன் செய்திகளை அறிந்து கொள்ள
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row className="header-row-2">
                                    <Grid.Column width="16">
                                        <Navigation />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                {/* <Segment>

                    <Navigation />

                </Segment> */}

                <Segment>
            <main>{children}</main>

                </Segment>

            </Container>
                
        </>
    )
}