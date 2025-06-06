import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerNav.css';

function HeaderNav() {
    function handleChangeActive (isActive, path) {
        const currentPath = window.location.pathname;
        if(currentPath === '/' && path === '/login') return "init-style active";
        return isActive ? "init-style active" : "init-style";
    }

    return ( 
        <div className='headerNav'>
            <NavLink className={({isActive}) => handleChangeActive(isActive, '/login')} to="/login">登录</NavLink>
            <NavLink className={({isActive}) => handleChangeActive(isActive, '/register')} to="/register">注册</NavLink>
        </div>
     );
}

export default HeaderNav;