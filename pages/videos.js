import { Card, Container, Embed, Grid, Header, Label, Segment } from "semantic-ui-react";
import VideoCard from "./components/Videos/VideoCard";

function videos () {
 return(
   

         <Card.Group centered> 
               <VideoCard />
               <VideoCard />
               <VideoCard />
               <VideoCard />
               <VideoCard />
               <VideoCard />
         </Card.Group>
    
   
 )
}


export default videos