import React from 'react'
import { Card, Image, Icon, Container } from 'semantic-ui-react'

const PostDetail = (props) => {
   
    let post = props.postObj
    const formattedPrice = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(post&&post.price)
    const convertedDate = new Date(post&&post.date)

    return(
       <div>
            <Card centered style={{ width:"400px" }}
                image={post&&post.image}
                header={`${post&&post.title} |  ${formattedPrice} `}
                meta={post&&post.date}
                description={post&&post.description}
                extra={"Chat"}
            />
       </div>
    )
}

export default PostDetail
