import React from 'react'
import { Form, Badge,Button } from 'react-bootstrap'
import './styles.css'
import Axios from 'axios'

class CreateTicket extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('https://desk.zoho.com/api/v1/tickets', {
            headers: {
                orgId: "60001280952",
                Authorization: "aa8cd2f4d25aa3418e47f953ad9fe323"
            },
            data: {
                "subCategory": "Sub General",
                "cf": {
                    "cf_permanentaddress": null,
                    "cf_dateofpurchase": null,
                    "cf_phone": null,
                    "cf_numberofitems": null,
                    "cf_url": null,
                    "cf_secondaryemail": null,
                    "cf_severitypercentage": "0.0",
                    "cf_modelname": "F3 2017"
                },
                "productId": "",
                "contactId": "1892000000042032",
                "subject": "Real Time analysis Requirement",
                "dueDate": "2016-06-21T16:16:16.000Z",
                "departmentId": "1892000000006907",
                "channel": "Email",
                "description": "Hai This is Description",
                "priority": "High",
                "classification": "",
                "assigneeId": "1892000000056007",
                "phone": "1 888 900 9646",
                "category": "general",
                "email": "carol@zylker.com",
                "status": "Open"
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))

    }
    render() {
        return (
            <>
                <center style={{ "marginTop": "23px" }}>
                    <h4>
                        Add New Ticket <Badge variant="secondary">New</Badge>
                    </h4>
                </center>
                <div className="CreateTicketContainer">

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Department</Form.Label>
                            <Form.Control as="select">
                                <option>PWSLab DevOps Support</option>
                                <option>iSupport</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Example multiple select</Form.Label>
                            <Form.Control as="select" multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default CreateTicket