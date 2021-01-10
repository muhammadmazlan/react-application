import React from 'react';

export default function Home() {
    const user = (this.state.username !== null && 'Welcome ' + this.state.username);
        const poster = (<PosterList title="Original" posters={originals} />);
    return (
        <div>
            {user} 
            {poster}  
        </div>
    )
}
