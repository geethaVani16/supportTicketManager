import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './Register.css'


class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        //console.log(prop,e.target.name ,'in Register')
        //console.log(value,e.target.value,'in Register')
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        return (
            <div className="RegisterContainer">
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            type="email"
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