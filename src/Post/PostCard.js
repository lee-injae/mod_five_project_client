import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
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
        const {title, price, date, description, image} = this.props.postObj

        return (
            <div>
            <Card onClick={this.showDetail} >
                <Image src={image} wrapped ui={false} size='medium' rounded />
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
                        <Icon name='like' />
                       10 interests
                    </a>
                    </Card.Content>
            </Card>
            
              {this.state.showDetails ? 
              <div>
                  <PostDetail postObj={this.props.postObj}  />
                  </div> 
                  : 
                  null }          
            </div>
            )
            
    }
}

export default PostCard


