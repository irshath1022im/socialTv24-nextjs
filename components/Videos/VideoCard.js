import { Card, Embed, Label } from "semantic-ui-react"

const VideoCard = ()=>{
    return(
        <Card>
                    <Embed 
                        source="youtube"

                    />

                <Card.Content>
                    Test
                </Card.Content>

                <Card.Content extra>
                   <Label color="purple"> Posted :  2 Days Ago</Label>
                </Card.Content>

                </Card>
            
    )
}

export default VideoCard;