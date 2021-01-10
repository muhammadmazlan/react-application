import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import './ShowsDetail.css';
import styles from './ShowsDetail.module.css';

class ShowsDetail extends Component {
  render() {
    if (!this.props.location.state) {
      return <Redirect to="/" />;
    }

    const {
      backdrop_path,
      first_air_date,
      id,
      name,
      original_title,
      overview,
      release_date,
      vote_average,
    } = this.props.location.state.poster;
    const title = name || original_title;
    const date = first_air_date || release_date;
    
    return (
      <div className="shows-detail" data-id={id}>
        <img className="shows-detail__image" src={backdrop_path} alt={title} />
        <h1>{title}</h1>
        <p>
          <span className="shows-detail__date">Release date: {date}</span>
        </p>
        <p className="shows-detail__overview">{overview}</p>
        <button className={`btn btn--primary ${styles.btn}`} type="button">
          Play
        </button>
        <button className="btn shows-detail__button" type="button">
          + My List
        </button>
      </div>
    );
  }
}

export default withRouter(ShowsDetail);