import { Card, Embed, Icon,  Label } from "semantic-ui-react"



const RecentVideoPostCard = () => {
    return(
        <Card fluid={true}>
        <Embed 
            source="youtube"
        />
        <Card.Content textAlign="left">
            <Card.Description as="h4">
                ഞാൻ കണ്ടത് എന്റെ കുട്ടികൾ കാണേണ്ട’’ ഞാൻ കണ്ടത് എന്റെ കുട്ടികൾ കാണേണ്ട
        
            </Card.Description>

            <Card.Meta>
               2021-09-25
            </Card.Meta>

            </Card.Content>

            <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            22 Friends
                        </a>

                        <Label attached="bottom right" color="olive">Videos</Label>
            </Card.Content>

      

    </Card>
    )
}

export default RecentVideoPostCard;