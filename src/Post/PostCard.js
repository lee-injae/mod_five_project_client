import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


class PostCard extends React.Component {

    render(){
        const {title, price, date, description, image} = this.props.postObj
        // console.log(this.props.postObj)
        return (
            <Card>
                <Image src={image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        {title}
                    </Card.Header>
                    <Card.Meta> 
                        {date}
                        {/* {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                        }).format(date)} */}
                    </Card.Meta>
                    <Card.Meta>
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        }).format(price)}
                    </Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='circle outline' />
                        10 Friends
                    </a>
                    </Card.Content>
            </Card>
            )
            
    }
}

export default PostCard


