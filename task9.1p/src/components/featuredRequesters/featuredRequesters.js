import React from 'react';
import RequesterList from './requester/requesterList';
import './featuredRequesters.css';

class featuredRequesters extends React.Component {
    render() {
        return(
            <div className='featuredRequestersContainer'>
                <RequesterList />
            </div>
        )
    }
}

export default featuredRequesters;
