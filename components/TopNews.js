
import { Card, Icon,  Label, Message, Image } from "semantic-ui-react"
import Link from 'next/link'
import Moment from "react-moment";

function TopNews ({news}){
    // console.log(props.topNews.content)
  

    if(!news) {
        return(
            <Message info>
                Loading...
            </Message>
        )
    }
    return(
        <Card fluid={true}>
        <Image src={`http://socialtv24.info/storage/${news.thumbnail}`} alt={news.id}  />
        <Card.Content>
            <Card.Header>
                    {news.title}
            </Card.Header>

            <Card.Meta>
                <Moment toNow>
                    {news.created_at}
                </Moment>
            </Card.Meta>

        </Card.Content>

        <Card.Content extra>
                       
                <Label color="olive">
                    <Link href={`posts/${news.id}`}>ReadMore</Link></Label>
        </Card.Content>


    </Card>          
    )
}


export default TopNews;