import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import NavItem from '../NavItem/NavItem';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
// import Clock from '../Clock/Clock';
// import Counter from '../Counter/Counter';
// import Todos from '../Todos/Todos';
import PosterList from '../PosterList/PosterList';
import originals from '../../assets/netflix-originals.json';
import Magazines from '../../routes/Magazines/Magazines';
// import Home from '../../routes/Home/Home';
// import MyList from '../../routes/MyList/MyList';
import ShowsDetail from '../../routes/ShowsDetail/ShowsDetail';
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
                    <NavLink className="nav-item" to="/magazines">Magazines</NavLink>
                    <div className="extend" />
                    {button}
                </AppBar> 
                <main>
                    <Switch>
                        <Route path="/" exact>
                           <p>Home Page</p>
                           {/* <Home /> */}
                           {user} 
                            {poster} 
                        </Route>
                        <Route path="/myList" exact>
                            <p>My List</p>
                            {/* <MyList /> */}
                            {user}
                        </Route>
                        <Route path="/magazines" exact>
                            <p>Magazines</p>
                            <Magazines />
                        </Route>
                        <Route path="/shows/:id/:name?" exact>
                            <ShowsDetail />
                        </Route>
                    </Switch>
                                        
                </main>
            </Router>
        )
    }
}