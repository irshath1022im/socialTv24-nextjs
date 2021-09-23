import { Card, Icon, Image, Label } from "semantic-ui-react"
import Link from 'next/link'

export default ()=>{
    return(
        <Card fluid={true}>
            <Image src="/images/topNews1.jpg" />
            <Card.Content>
                <Card.Header>TOP NEWS ‘‘ഞാൻ കണ്ടത് എന്റെ കുട്ടികൾ കാണേണ്ട’’: ദുരിതമൊഴിയാതെ അഫ്ഗാൻ അഭയാർഥികൾ...
            
                </Card.Header>

                <Card.Meta>
                   2021-09-25
                </Card.Meta>

                <Card.Description>
                ‘‘മാതൃരാജ്യം വിടാൻ ആരാണ് ഇഷ്ടപ്പെടുക? മടങ്ങിപ്പോകണമെന്നാണ് ആഗ്രഹം, എന്നാൽ താലിബാനിൽ വിശ്വാസമില്ല. അവ...
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