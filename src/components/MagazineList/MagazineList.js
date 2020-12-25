import React from 'react';
import Magazine from '../Magazine/Magazine';

export default function MagazineList(props) {
    const {posters = [], title} = props;

    // const posterList = [];
    const posterList = posters.length;

    // for (let i = 0; i < posters.length; ++i) {
    //     posterList.push(
    //         <Magazine key={posters[i].id} image={posters[i].heroImage} name={posters[i].title} />
    //     );
    // }
    
    return (
        <div className="poster-list">
            <h3>{title}</h3>
            <div className="poster-list__frame">
                {posterList}
            </div>  
        </div>
    )
}
