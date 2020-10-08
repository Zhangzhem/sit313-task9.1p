import React from 'react';
import './bottomNavBar.css';

class bottomNavBar extends React.Component{
    render() {
        return(
            <div className='bottomNavBarContainer'>
                <div className='bottomNavBarSign'>
                    <form>
                        <div className='bottomNavInputGroup'> 
                            <label for='inputEmail'>NEWSLETTER SIGN</label>
                        </div>
                        <div className='bottomNavInputEmail'>
                            <input name='inputEmail' type='text' className='bottomNavEmail'/>
                        </div>
                        <div>
                            <input type='submit' value='Subscribe' className='bottomNavInputSubmit'/>
                        </div>
                    </form>
                </div>
                <div className='bottomNavBarConnect'>
                    <p>CONNECT US</p>
                </div>
            </div>
        )
    }
}

export default bottomNavBar;