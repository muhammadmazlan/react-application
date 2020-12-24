import React from 'react';
import { NavLink } from 'react-router-dom';
import './Poster.css';

export default function Poster({ image, name}) {
    return (
        <NavLink className="poster" to="/test">
            <img className="poster__picture" src={image} alt={name} />
        </NavLink>
    )
}
