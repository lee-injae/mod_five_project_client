import React from 'react'
import { Card, Image, Icon, Container } from 'semantic-ui-react'



const PostCardShow = (props) => {
    const {title, price, date, description, image} = props.postObj

    return(
       <div>
            <Container>
           
             <Card >
             <Image src={image} wrapped ui={false} size='large' rounded />
                 <Card.Content>
                     <Card.Header>
                         {title} || 
                         {new Intl.NumberFormat("en-US", {
                             style: "currency",
                             currency: "USD",
                             minimumFractionDigits: 0,
                             maximumFractionDigits: 0
                         }).format(price)}
                     </Card.Header>
                     <Card.Meta> 
                         {date}
                         {/* {new Intl.DateTimeFormat("en-US", {
                             year: "numeric",
                             month: "long",
                             day: "2-digit"
                         }).format(date)} */}
                     </Card.Meta>
                     <Card.Description>
                         {description}
                     </Card.Description>
                 </Card.Content>
                     <Card.Content extra>
                     <a>
                         <Icon name='like' />
                        10 interests
                     </a>
                     </Card.Content>
             </Card>
             </Container>
       </div>
    )
}

export default PostCardShow
