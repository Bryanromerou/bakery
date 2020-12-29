import React from 'react';
import Homepage from '../pages/Homepage';
import AboutUs from '../pages/AboutUs';
import Menu from '../pages/Menu';
import Order from '../pages/Order';
import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route path = '/order' component = {Order}/>
        <Route path = '/menu' component = {Menu}/>
        <Route path = '/aboutus' component = {AboutUs}/>
        <Route path = '/' component = {Homepage}/>
    </Switch>
)