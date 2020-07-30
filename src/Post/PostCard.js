import React from 'react'
import {Route, Link, NavLink} from 'react-router-dom'

import { Card, Icon, Image, Container } from 'semantic-ui-react'
import PostDetail from './PostDetail'

class PostCard extends React.Component {

    constructor(){
        super()
        this.state = {
            showDetails: false 
        }
    }

    showDetail = () => {
        this.setState({ showDetails: !this.state.showDetails })
    }

    render(){
        const {title, price, description, image} = this.props.postObj
        const convertedDate = new Date(this.props.postObj.date)
        const formattedDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(convertedDate)

        return (
            
            <div style={{ padding: "1rem" }} >
                <Card  >
                <Link to={`/posts/${this.props.postObj.id}`}>
                    <Image src={image} style={{ width: "12vw", height:"12vw"}}
                        size='small' centered
                    />
                    <br/>
                    <Card.Content>
                        <Card.Header style={{ height: "2rem", fontSize:"1.5rem"}}>
                            {title}
                        </Card.Header>
                        <Card.Meta style={{ color:"lightblue"}}> 
                            {formattedDate}
                        </Card.Meta>
                        <Card.Meta style={{ color:"black", fontSize:"1.3rem", paddingTop:"5px"}}>
                            {new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(price)}
                        </Card.Meta>
                        <Card.Description  style={{ color:"gray", paddingTop:"7px"}}>
                            {description}
                        </Card.Description>
                    </Card.Content>
                        <Card.Content extra>
                        <a>
                            <Icon name='like' />
                        10 interests
                        </a>
                        </Card.Content>
                    </Link>
                </Card>
            </div>
            )
            
    }
}

export default PostCard


// const today =  Date.now();
