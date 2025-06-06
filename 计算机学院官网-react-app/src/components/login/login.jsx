import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';


const inputInfo = [
    {key: 0, className: "username", type: 'text', placeholder: 'Username'},
    {key: 1, className: "password", type: 'password', placeholder: 'Password'}
];

function Login() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        errorMessage: ''
    });

    function CheckLogin (e) {
        let errorMessage = '';
        e.preventDefault();
        const {username, password} = userInfo;
        if(!username ||
           !password)

            errorMessage = "请将信息填写完整";
        
        else if(username !== localStorage.getItem('username') ||
                password !== localStorage.getItem('password')){

            errorMessage = '用户名或密码错误';

        }else {
            window.location.href = "/计算机学院官网/static/index.html";
        }

        setUserInfo((prev) => ({...prev, errorMessage}));
    }

    function getInfo (e, key) {
        const value = e.target.value.trim();
        setUserInfo((prev) => ({...prev, [inputInfo[key].className]: value}));
    }

    return ( 
        <div className='login-page'>
            <form>
                {inputInfo.map((input) => <input 
                required
                onChange={(e) =>  getInfo(e, input.key)}
                key={input.key} 
                className={input.className} 
                type={input.type} 
                placeholder={input.placeholder} /> )}
                
                <div className='errorMessage'>
                    {userInfo.errorMessage}
                </div>
                <button onClick={CheckLogin} type='submit'>登录</button>
            </form>
        </div>
     ); 
}

export default Login;