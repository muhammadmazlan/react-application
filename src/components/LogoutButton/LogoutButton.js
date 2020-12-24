import React from 'react'

export default function LogoutButton(props) {
    return(
        <button className="btn" type="button" onClick={props.logout}> 
            Logout
        </button>
    );
}