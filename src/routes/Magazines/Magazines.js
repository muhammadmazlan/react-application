import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import MagazineList from '../../components/MagazineList/MagazineList'
import './Magazines.css';

export default class Magazines extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          Regional: []
        };
      }
      componentDidMount() {
        fetch("https://www.ourdaily.co/explore/api/magazines")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                Regional: result.data.Regional,
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
        const { error, isLoaded, Regional } = this.state;
        // const magazines = (<MagazineList title="Regionals" posters={Regional} />);
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return ( 
            //   {magazines}
            <div className="poster-list">
            <div className="poster-list__frame">
              {Regional.map(item => (
                <li key={item.id}>{item.title}
                    <NavLink className="poster" to={item.file} >
                        <div><img className="poster__picture" src={item.heroImage} alt={item.title}/></div>
                    </NavLink>
                </li>
              ))}
            </div>
            </div>
            // <div className="poster-list">
            //     <h3>{title}</h3>
            //     <div className="poster-list__frame">
            //         {posterList}
            //     </div>  
            // </div>
          );
        }
      }
}
