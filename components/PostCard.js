import Link from "next/link"
import { useState } from "react"
import Moment from "react-moment"
import { Card, Icon, Image, Label, Message } from "semantic-ui-react"



function PostCard ({post}){
    // console.log(post)
 
    const [categoryColor, setCategoryColor] = useState(['red', 'green','brown','blue','yellow','red'])

    if(!post) {
        return(
            <Message info>
                Loading Post...
            </Message>
        )
    }

    return(
        <Card fluid={true} >
        <Image src={`http://socialtv24.info//storage/${post.thumbnail}`} alt={post.id}/>
        <Card.Content textAlign="left">
            <Card.Description as="h4">
                {post.title}
             

             
                        <Label color="blue" as="a">
                            
                                 <Link href={`/posts/${post.id}`}>
                                     Read More
                                </Link>
                        </Label>
              
        
            </Card.Description>

            <Card.Meta>
               <Moment toNow>{post.created_at}</Moment>
            </Card.Meta>

            </Card.Content>

            <Card.Content extra>
                        <Label attached="bottom right" color={categoryColor[post.subCategoryId]}>{post.subCategory}</Label>
            </Card.Content>

      

    </Card>
    )
}

export default PostCard;