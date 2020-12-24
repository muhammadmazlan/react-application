import React from 'react';
import Poster from '../Poster/Poster';
import './PosterList.css';

export default function PosterList(props) {
    const {posters = [], title} = props;

    const posterList = [];

    for (let i = 0; i < posters.length; ++i) {
        posterList.push(
            <Poster key={i} image={posters[i].poster_path} name={posters[i].name} />
        );
    }

    return (
        <div className="poster-list">
            <h3>{title}</h3>
            <div className="poster-list__frame">
                {posterList}
            </div>  
        </div>
    )
}
