import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Register from '../Authentication/Register.Component';
import Login from '../Authentication/Login.Component';
import NavbarComponent from '../Navbar/Navbar.Component';


const RootAppRoute = () => {
    return (
        <BrowserRouter>
        <NavbarComponent/>
            <Route exact path='/users/register' component={Register} />
            <Route path='/users/login' component={Login} />
        </BrowserRouter>
    )

}

export default RootAppRoute