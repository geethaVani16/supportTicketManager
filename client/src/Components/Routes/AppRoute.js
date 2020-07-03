import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Register from '../Authentication/Register.Component';
import Login from '../Authentication/Login.Component';
import NavbarComponent from '../Navbar/Navbar.Component';
import CreateTicket from '../Ticket/CreateTicket';


const RootAppRoute = () => {
    return (
        <BrowserRouter>
        <NavbarComponent/>
            <Route exact path='/users/register' component={Register} />
            <Route path='/users/login' component={Login} />
            <Route path='/addticket' component={CreateTicket}/>
        </BrowserRouter>
    )

}

export default RootAppRoute