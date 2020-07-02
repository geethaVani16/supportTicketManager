import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './Register.css'


class Login extends React.Component {
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