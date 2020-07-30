import React from 'react'
import {Route, Link, NavLink} from 'react-router-dom'

import PostCard from './PostCard'
import Filters from './Filters'
import { Card, Container} from 'semantic-ui-react'
import PostDetail from './PostDetail'

const PostContainer = (props) => {
    
        return (
            <div style={{paddingLeft:"5rem"}}>
                <Container fluid>
                    <Filters 
                        changeFilterType={props.changeFilterType} 
                        locationIds={props.locationIds} />
                    <br/>
                    <br/>
                    <Card.Group itemsPerRow={5}  >
                        {props.posts.map(post => {
                            return <PostCard postObj={post} key={post.id} />})}
                    </Card.Group>
                </Container>

            </div>
        )
    }


export default PostContainer