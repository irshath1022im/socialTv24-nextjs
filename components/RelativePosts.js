import axios from "axios";
import { useState } from "react";
import Moment from "react-moment";
import { Card, Message, Feed, Label } from "semantic-ui-react";
import useSWR from "swr";
import PostCard from "./PostCard";
import Link from 'next/link'


function RelativePosts ({subCategoryId}) {
    const [categoryColor, setCategoryColor] = useState(['red', 'green','brown','blue','yellow','red'])

const fetcher = url => axios.get(url)
    .then(res => res.data)
  

const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_SERVER}/posts/subCategoryId/${subCategoryId}`, fetcher)

// console.log(data)
    if (error) return <Message info>Failed to Load</Message>
    if (!data) return <Message info>Loading Posts</Message>

    // render data
  
    return(
        <>

        {
          data.data.length > 0 ?

            <Card.Group>
              
               
               
                    {
                        data.data.map( post => {
                            return(
                                // 
                                <Card key={post.id}>
                                    <Card.Content>
                                        <Feed size="large">
                                        
                                            <Feed.Label />
                                            <Feed.Content>
                                                <Feed.Date content={<Moment toNow>{post.created_at}</Moment>} />
                                                <Feed.Summary >
                                                    <Link href={`/posts/${post.id}`} >
                                                        {post.title}
                                                    </Link>
                                                </Feed.Summary>
                                            </Feed.Content>
                                                
                                        
                                        </Feed>
                                    </Card.Content>

                                    <Card.Content extra>
                                    <Label attached="bottom right" color={categoryColor[post.subCategoryId]}>{post.subCategory}</Label>
                                    </Card.Content>
                                </Card>
                               
                                 )
                                })
                    }
                                      

                                      {/* image={`http://socialtv24.info//storage/${post.thumbnail}`}  */}

            </Card.Group>

            :

            <Message info>No Posts Found!!!</Message>

            }
            
                {/* <PostCard  post={post} key={post.id} /> */}
               
            
        </>
    )
}


export default RelativePosts;