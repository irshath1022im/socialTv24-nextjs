import Link from "next/link"
import { Card, Icon, Image, Label } from "semantic-ui-react"



const RecentPostCard = () => {
    return(
        <Card fluid={true}>
        <Image src="/images/topNews1.jpg" alt="image" />
        <Card.Content textAlign="left">
            <Card.Description as="h4">
                ഞാൻ കണ്ടത് എന്റെ കുട്ടികൾ കാണേണ്ട’’ ഞാൻ കണ്ടത് എന്റെ കുട്ടികൾ കാണേണ്ട
             

                <Link href="/posts/4">
                        <Label color="blue" as="a">Read More</Label>
                </Link>
        
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

                        <Label attached="bottom right" color="teal">Category</Label>
            </Card.Content>

      

    </Card>
    )
}

export default RecentPostCard;