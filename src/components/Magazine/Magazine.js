import React from 'react';
// import { NavLink } from 'react-router-dom';

export default function Magazine({ heroImage, title, file}) {
    return (
        // <NavLink className="poster" to={file}>
            <img className="poster__picture" src={heroImage} alt={title} />
        // </NavLink>
    )
}
