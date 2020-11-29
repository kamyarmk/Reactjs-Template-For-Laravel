import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

function Header(props){
    return(
        <div className="HeaderArea">
            <div className="LogoArea">
                <h1>Code</h1>
                <small>The Way</small>
            </div>
            <div className="MenuArea">
                <ul>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                    <li>Menu</li>
                </ul>
            </div>
            <div className="PromoArea">
                <p>Promo</p>
            </div>
        </div>
    )
}

export default Header;