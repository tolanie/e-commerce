import React from "react";

import { link } from 'react-router-dom';

import {ReactComponent as Logo} from '../../asset/crown.svg';

import './header.styles.scss';

const Header= () => (
    <div className='header'>
        <link className='logo-container' to= "/">
            <Logo className = 'logo'/>
        </link>
        <div className='options'>
        <link className= 'option' to='/shop'>
        SHOP
        </link>
        <link className= 'option' to='/shop'>
        SHOP
        </link>
        </div>
    </div>
)

export default Header;