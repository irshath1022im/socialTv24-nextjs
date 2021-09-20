import { Container, Image, Segment, SegmentGroup } from 'semantic-ui-react'
import Navigation from './Navigation'

export default function Layouts ({children}) {
    return(
        <>
            <SegmentGroup>

                <Segment>
                    <Image src="/images/banner.jpeg" fluid size="medium" />
                </Segment>

                <Segment>

                    <Navigation />

                </Segment>

                <Segment>
            <main>{children}</main>

                </Segment>

            </SegmentGroup>
                
        </>
    )
}