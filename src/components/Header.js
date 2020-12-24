import React from 'react';
import './Header.css';

export default({black})=> {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="">
                    <img src="https://www.shitpostbot.com/img/sourceimages/angry-chicken-netflix-user-icon-5927959975f50.jpeg" alt="usuario"></img>
                </a>
            </div>
        </header>
    );
}