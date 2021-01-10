import React from 'react'
import './NavItem.scss';

export default function NavItem(props) {
return <a className="nav-item" href={props.page}>{props.menu}</a>;
}