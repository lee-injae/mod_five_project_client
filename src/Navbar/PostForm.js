import React from 'react'
import { Form } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class PostForm extends React.Component {

   state = this.resetState()

    resetState(){
        return {
            title: "",
            price: 0,
            date: new Date(),
            description: "",
            image: "",
            sold: false,
        }
    }
    
    handleChange = (e) => {
        let name = e.target.name 
        let value = e.target.value 
        this.setState ({ [name]: value })
    }

    handleSubmit = (e) => {
        console.log("submitting")
        e.preventDefault();
        const {title, price, date, description, image, sold } = this.state
        fetch('http://localhost:3000/post', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "aaplication/json"
            },
            body: JSON.stringify({
                user_id: this.props.currentUser.id,
                title: title,
                price: price,
                date: date,
                description: description,
                image: image,
                sold: sold
            })
        })
        .then(r => r.json())
        .then(data=> {
            console.log(data)
            this.setState(this.resetState())
            this.props.addPost(data)
        })
    }
  
    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group  >
                    <Form.Input width={13} required label="ImageUrl" 
                    name="image" onChange={this.handleChange} 
                    value={this.state.image} />
                </Form.Group>
                <Form.Group  >
                    <Form.Input width={8} required label="Title" 
                    name="title" onChange={this.handleChange} 
                    value={this.state.title} />
                    <Form.Input width={2} required label="Price" 
                    name="price" onChange={this.handleChange} 
                    value={this.state.price} />
                </Form.Group>
                <Form.TextArea width={13} required label="Description" 
                    name="description" onChange={this.handleChange} 
                    value={this.state.description} />
                <Form.Button>Post an item</Form.Button>
            </Form>
        )
    }
}

export default PostForm