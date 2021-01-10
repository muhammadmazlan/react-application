import React from 'react';
import { NavLink } from 'react-router-dom';
import './Poster.css';

export default function Poster(poster) {
    const { id, name = '', image } = poster;
    return (
        <NavLink className="poster"
            to={{
                pathname: `shows/${id}/${name.toLowerCase().split(' ').join('_')}`,
                state: {
                poster,
                },
            }}
            exact
            >
            <img className="poster__picture" src={image} alt={name} />
        </NavLink>

        // <NavLink className="poster" to="/test">
        //     <img className="poster__picture" src={image} alt={name} />
        // </NavLink>
    )
}
