import { Container, Header, Image, Segment } from 'semantic-ui-react'
import Navigation from './Navigation'

export default function Layouts ({children}) {
    return(
        <>
            <Container>

                <Segment>
                    
                    <Image src="/images/banner.jpeg" fluid />
                </Segment>

                <Segment>

                    <Navigation />

                </Segment>

                <Segment>
            <main>{children}</main>

                </Segment>

            </Container>
                
        </>
    )
}