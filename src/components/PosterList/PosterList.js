import React from 'react';
import Poster from '../Poster/Poster';
import './PosterList.css';

export default function PosterList(props) {
    const {posters, title} = props;

    return (
        <div className="poster-list">
            <h3>{title}</h3>
            <div className="poster-list__frame">
                {/* {posterList} */}
                {posters.length > 0 ? (
                    posters.map((poster) => {
                        const {
                        id,
                        name,
                        original_name,
                        original_title,
                        poster_path,
                        } = poster;
                        return (
                        <Poster
                            key={id}
                            id={id}
                            name={name || original_name || original_title}
                            image={poster_path}
                            {...poster}
                        />
                        );
                    })
                    ) : (
                    <>This list is empty now, please come back later.</>
                    )}
            </div>  
        </div>
    )
}
