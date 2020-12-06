import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import NavItem from '../NavItem/NavItem';
import LoginButton from '../LoginButton/LoginButton';
import './Netflix.css';

export default class Netflix extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <AppLogo />
                    <p>" "</p> 
                    <NavItem menu="Home" page="/#home"/>
                    <p>" "</p>
                    <NavItem menu="MyList" page="/#my-list"/>
                    <div className="extend" />
                    <LoginButton />
                </AppBar> 
                
            </div>
        )
    }
}