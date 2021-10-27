import { Container, Grid, Header, Image, Segment } from 'semantic-ui-react'
import Navigation from './Navigation'
import Head from 'next/head'

export default function Layouts ({children}) {
    return(
        <>
            <Container>
                <Head>
                    <title>SocialTV24</title>
                    <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                    <link rel="manifest" href="/favicons/manifest.json" />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
                    <meta name="theme-color" content="#ffffff"></meta>
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