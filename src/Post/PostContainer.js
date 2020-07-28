import React from 'react'
import PostCard from './PostCard'

import { Card } from 'semantic-ui-react'

class PostContainer extends React.Component {

    render(){
        return (
            <Card.Group itemsPerRow={5}  >
                {this.props.posts.map(post => {
                    return <PostCard postObj={post} key={post.id} />})}
            </Card.Group>
        )
    }
}


export default PostContainer