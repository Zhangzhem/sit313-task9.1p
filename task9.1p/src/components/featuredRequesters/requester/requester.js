import React from 'react';
import './requesterList.css';

const requester = (props) => {
    return (
        <div className='requesterItem'>
            <img src={props.avater} className='requesterImage'/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default requester;