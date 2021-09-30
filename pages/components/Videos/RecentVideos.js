import {  Grid,  Pagination} from "semantic-ui-react"
import RecentVideoPostCard from "./RecentVideoPostCard";

const RecentVideos = () => {
    return( 
     <Grid>
       <Grid.Row>
          <Grid.Column mobile={8} tablet={4} computer={4}>
             <RecentVideoPostCard />
          </Grid.Column>

          <Grid.Column mobile={8} tablet={4} computer={4}>
            <RecentVideoPostCard />
          </Grid.Column>

          <Grid.Column mobile={8} tablet={4} computer={4}>
            <RecentVideoPostCard />
          </Grid.Column>

          <Grid.Column mobile={8} tablet={4} computer={4}>
             
            <RecentVideoPostCard />
            
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
    )
}

export default RecentVideos;