import React from 'react';
import './navBar.css';

class navBar extends React.Component {
    render() {
        return(
            <div className='navBarContainer'>
                <p className='navBarTitle'>
                    ICrowdTask
                </p>
                <nav className='navBar'>
                    <ul>
                        <li className='navBarItems'><a>How it works</a></li>
                        <li className='navBarItems'><a>Requesters</a></li>
                        <li className='navBarItems'><a>Workers</a></li>
                        <li className='navBarItems'><a>Pricing</a></li>
                        <li className='navBarItems'><a>About</a></li>
                    </ul>
                </nav>
                <form className='navBarForm'>
                    <input type='submit' value='sign in' className='navBarFormSubmit' />
                </form>
            </div>
        )
    }
}

export default navBar;