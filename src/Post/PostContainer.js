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

// <Card.Group itemsPerRow={6}>
// {this.props.pokemon.map(pokemon => {
//   return <PokemonCard pokemon={pokemon} key={pokemon.id}/>
// })}
// </Card.Group>

export default PostContainer