import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navBar/navBar';
import ImageHeader from './components/image/imageHeader';
import FeaturedRequesters from './components/featuredRequesters/featuredRequesters';
import BottomNavBar from './components/bottomNavBar/bottomNavBar';

ReactDOM.render(<NavBar />, document.getElementById('navBar'));

ReactDOM.render(<ImageHeader />, document.getElementById('imageHeader'));

ReactDOM.render(<FeaturedRequesters />, document.getElementById('featuredRequesters'));

ReactDOM.render(<BottomNavBar />, document.getElementById('bottomNavBar'));