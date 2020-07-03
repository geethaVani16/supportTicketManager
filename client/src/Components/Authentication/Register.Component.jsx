import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './Register.css'
import axios from 'axios'


class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            notice:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(e) {
        //console.log(prop,e.target.name ,'in Register')
        //console.log(value,e.target.value,'in Register')
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:4000/users/register", formData)
            .then((res) => {
                if(res.status===200) {
                    this.setState(() => ({
                        username: '', email: '', password: '',
                        //once if we are loged in. we have to make input feilds empty and redirect user to login screen
                        notice: "successfully registered,taking you to login screen"
                    }))
    
                    setTimeout(() => {
                        this.props.history.push('/users/login')
                    }, 2000)
                }
            
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="RegisterContainer">
                {this.state.notice }
                <Form  onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            value={this.state.username}
                            onChange={this.handleChange}
                            name='username'

                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name='email' />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control

                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name='password'
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }

}

export default Register;