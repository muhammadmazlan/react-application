import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import NavItem from '../NavItem/NavItem';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Clock from '../Clock/Clock';
import Counter from '../Counter/Counter';
import Todos from '../Todos/Todos';
import PosterList from '../PosterList/PosterList';
import originals from '../../assets/netflix-originals.json'
import './Netflix.css';

export default class Netflix extends Component {
state = {
    username: null,
};

loginUser = () => {
    this.setState({
        username: 'Mr.Anderson',
    });
};
logoutUser = () => {
    this.setState({
      username: null,
    });
};
    render() {
        const button = 
        this.state.username !== null ? (
            <LogoutButton logout={this.logoutUser} />
          ) : (
            <LoginButton login={this.loginUser} />
          );
        const user = (this.state.username !== null && 'Welcome ' + this.state.username);
        const poster = (<PosterList title="Original" posters={originals} />);

        return (
            <Router>
                <AppBar>
                    <AppLogo />
                    <NavLink className="nav-item" to="/">Home</NavLink>
                    <NavLink className="nav-item" to="/myList">My List</NavLink>
                    <div className="extend" />
                    {button}
                </AppBar> 
                <main>
                    <Switch>
                        <Route path="/" exact>
                           <p>Home Page</p>
                           {user} 
                           {poster}
                        </Route>
                        <Route path="/myList">
                            <p>My List</p>
                            {user}
                        </Route>
                    </Switch>
                                        
                </main>
            </Router>
        )
    }
}