import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import NavItem from '../NavItem/NavItem';
import LoginButton from '../LoginButton/LoginButton';
import Clock from '../Clock/Clock';
import './Netflix.css';

export default class Netflix extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <AppLogo />
                    <NavItem menu="Home" page="/#home"/>
                    <NavItem menu="MyList" page="/#my-list"/>
                    <div className="extend" />
                    <LoginButton />
                </AppBar> 
                <main>
                     <Clock />
                </main>
            </div>
        )
    }
}