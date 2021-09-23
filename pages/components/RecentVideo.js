import { Card, Icon, Image, Label } from "semantic-ui-react"



export default () => {
    return(
        <Card>
        <Image src="/images/news2.jpg" />
        <Card.Content>
            <Card.Header>
                மதுபான நிலையங்களைத் திறக்கும் தீர்மானத்தை எடுத்த முட்டாள்கள் யார்? - கீதா எம்.பி
            </Card.Header>
            <Card.Meta>
                 <Label color="blue">Read More</Label>
             </Card.Meta>
        </Card.Content>

        <Card.Content extra>
            <a> 
                <Icon name='vcard' />
                22 Friends
            </a>
            </Card.Content>
    </Card>
    )
}