import React from 'react'
import PostCard from './PostCard'
import Filters from './Filters'
import { Card } from 'semantic-ui-react'

const PostContainer = (props) => {
        return (
            <div>
                <Filters changeType={props.changeFilterType} 
                locationIds={props.locationIds} />
                <Card.Group itemsPerRow={5}  >
                    {props.posts.map(post => {
                        return <PostCard postObj={post} key={post.id} />})}
                </Card.Group>
            </div>
        )
    }


export default PostContainer