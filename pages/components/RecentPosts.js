import { Card, Grid, Header} from "semantic-ui-react"
import RecentPostCard from "./RecentPostCard";

function RecentPosts ({perItemComputer}) {
    return( 
    //  <Card.Group itemsPerRow="2">
    //     <RecentPostCard />
    //     <RecentPostCard />
    //     <RecentPostCard />
    //     <RecentPostCard />
      
    //   </Card.Group>

      <Grid>
        <Grid.Row>
          <Grid.Column computer={perItemComputer} tablet="8">
            <RecentPostCard />
          </Grid.Column>

          <Grid.Column computer={perItemComputer} tablet="8">
            <RecentPostCard />
          </Grid.Column>

          <Grid.Column computer={perItemComputer} tablet="8">
            <RecentPostCard />
          </Grid.Column>

          
          <Grid.Column computer={perItemComputer} tablet="8">
            <RecentPostCard />
          </Grid.Column>


        </Grid.Row>
      </Grid>
    )
}

export default RecentPosts;