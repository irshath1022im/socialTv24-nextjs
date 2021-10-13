import {  Grid, Label, Pagination} from "semantic-ui-react"
import JanazaPost from "./JanazaPost";

const JanazaPosts =  ()=> {
    return( 
     <Grid>
       <Grid.Row>
          <Grid.Column mobile={8} tablet={4} computer={4}>
              <JanazaPost />
          </Grid.Column>

          <Grid.Column mobile={8} tablet={4} computer={4}>
              <JanazaPost />
          </Grid.Column>

          <Grid.Column mobile={8} tablet={4} computer={4}>
              <JanazaPost />
          </Grid.Column>

          <Grid.Column mobile={8} tablet={4} computer={4}>
             
                <JanazaPost />
            
          </Grid.Column>

          <Grid.Column>
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

      // <Grid columns="equal" stackable textAlign="left" >
      //   <Grid.Row>
      //     <Grid.Column computer="2">
      //       <RecentPostCard />
      //     </Grid.Column>

      //     <Grid.Column computer="2">
      //       <RecentPostCard />
      //     </Grid.Column>

      //     <Grid.Column computer="2">
      //       <RecentPostCard />
      //     </Grid.Column>

      //   </Grid.Row>
      // </Grid>
    )
}

export default JanazaPosts;

