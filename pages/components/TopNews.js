import { Card, Icon, Image, Label } from "semantic-ui-react"
import Link from 'next/link'

function TopNews (){
    // console.log(props.topNews.content)
    // const {content,posted,title} = props.topNews
    return(
        <Card fluid={true}>
            <Image src="/images/topNews1.jpg" />
            <Card.Content>
                <Card.Header>
                        Test
                </Card.Header>

                <Card.Meta>
                Test
                </Card.Meta>

                <Card.Description>
                   Test
                    <Link href="/posts/4">
                        <Label color="blue" as="a">Read More</Label>
                    </Link>
                </Card.Description>
                </Card.Content>

                <Card.Content extra>
                            <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>

          

        </Card>
    )
}


export default TopNews;