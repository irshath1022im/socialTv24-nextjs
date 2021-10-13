import { Card} from "semantic-ui-react"
import RecentPostCard from "./RecentPostCard";
import RecentVideo from "./RecentVideo";

function RecentVideos () {
    return( 
     <Card.Group centered stackable doubling textAlign="center">
        <RecentVideo />
        <RecentVideo />
        <RecentVideo />
        <RecentVideo />
      </Card.Group>
    )
}

export default RecentVideos;