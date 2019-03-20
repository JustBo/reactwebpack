import React, {Component} from 'react';

import artists from './Store';

class Artists extends Component {
    render() {
        return (
            <>
                {artists.map(artist => (
                    <div id='card-body' key={artist.id}>
                        <div className='card'>
                            <h2>{artist.name}</h2>
                            <p>genre: {artist.genre}</p>
                            <p>Albums released: {artist.albums}</p>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export default Artists;