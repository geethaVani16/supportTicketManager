import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './Register.css'
import axios from 'axios'
 


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }


    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:4000/users/login', formData)
            .then(response => {
                axios.defaults.headers['x-auth'] = response.data.token
                localStorage.setItem('token', response.data.token) //the reason why we are setting taken to the localstorage is even if the page reloads our authentication still exits
                    this.props.history.push('/addticket')
            })
            .catch(err => {
                this.setState(() => ({
                    notice: err.response.data.notice
                }))
            })
    }

    render() {
        return (
            <div className="RegisterContainer">
                <Form  onSubmit={this.handleSubmit} >
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

export default Login;