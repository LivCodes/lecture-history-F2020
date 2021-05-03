import React from 'react';
import logo from '../logo.svg';

class Header extends React.Component {
    componentWillUnmount(){
        console.log("This component is dying......")
    }

    render(){
        return  (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        )
    }
}

//Create a class and make it extends React.Component
//Create a render instance method 
//That method needs to return your JSX

export default Header