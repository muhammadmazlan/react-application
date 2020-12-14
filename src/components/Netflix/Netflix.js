import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import NavItem from '../NavItem/NavItem';
import LoginButton from '../LoginButton/LoginButton';
import Clock from '../Clock/Clock';
import Counter from '../Counter/Counter';
import Todos from '../Todos/Todos';
import './Netflix.css';

export default class Netflix extends Component {

    state ={
        todos: [
            {
                id:1,
                task:"Clean Up task",
            },
            {
                id:2,
                task:"Record any difficulties",
            }
        ]
    }

    render() {
        // const todoList = this.state.todos !== null ? (
        // "empty todo list, please add something" 
        // ) : (
        // <TodoList />
        // );
        
        return (
            <>
                <AppBar>
                    <AppLogo />
                    <NavItem menu="Home" page="/#home"/>
                    <NavItem menu="MyList" page="/#my-list"/>
                    <div className="extend" />
                    <LoginButton />
                </AppBar> 
                <main>
                     <Clock />
                     <Counter />
                        <br />
                     <Todos />
                </main>
            </>
        )
    }
}