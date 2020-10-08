import React from 'react';
import Requester from './requester';
import ItemList1 from '../itemList1';
import ItemList2 from '../itemList2';
import './requesterList.css';

function requesterComponent (item, i){
    return <Requester
        avater = {item.avater}
        name = {item.name}
        description = {item.description}
    />
}

const RequesterList = () => {
    return(
        <div>
            <h1 className='requesterTitle'>Featured Requesters</h1>
            <div className='requesterListRow'>
                {ItemList1.map(requesterComponent)}
            </div>
            <div className='requesterListRow'>
                {ItemList2.map(requesterComponent)}
            </div>
        </div>
    )
}

export default RequesterList;