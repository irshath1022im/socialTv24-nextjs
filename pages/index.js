
import { Container, Image, Segment, SegmentGroup } from 'semantic-ui-react'
import Navigation from './components/Navigation'

export default function Home() {
  return (
 
      <SegmentGroup>       

          <Segment>
            <h4>Recent Posts</h4>
          </Segment>

          <Segment>
            <h4>Recent Videos</h4>
          </Segment>

          
          <Segment>
            <h4>FB Posts</h4>
          </Segment>

          <Segment>
            <h4>Our Ads</h4>
          </Segment>

          <Segment>
            <h4>Tutors</h4>
          </Segment>

          <Segment>
            <h4>footer</h4>
          </Segment>

      </SegmentGroup>

      
  

  )
}
