import React from 'react'
import PostCard from './PostCard'

class PostContainer extends React.Component {


   
    render(){
        console.log(this.props)
        return (
            <div>
                <PostCard />
            </div>
        )
    }
}

export default PostContainer