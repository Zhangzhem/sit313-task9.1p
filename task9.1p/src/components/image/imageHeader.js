import React from 'react';
import './imageHeader.css';

class image extends React.Component {
    render() {
        return(
            <div className='imageHeaderContainer'>
                <img src="https://picsum.photos/960/400" className='imageHeader'/>
            </div>
        )
    }
}

export default image;