import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './register.css';


const inputInfo = [
    {key: 0, className: "username", type: 'text', placeholder: 'Username'},
    {key: 1, className: "password", type: 'password', placeholder: 'Password'},
    {key: 2, className: "confirmPassword", type: 'password', placeholder: 'Confirm Password'}
];

function Register() {
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        errorMessage: ''
    });
    function CheckRegister (e) {
        let errorMessage = '';
        e.preventDefault();
        const {username, password, confirmPassword} = userInfo;
        if(!username ||
           !password ||
           !confirmPassword)

            errorMessage = "请将信息填写完整";
        
        else if(username === localStorage.getItem('username')){
            errorMessage = '该用户名已存在，请重新输入用户名';
        }else if(password !== confirmPassword){
            errorMessage = '两次输入密码不一致';
        }else {
            errorMessage = `注册成功！`;
            localStorage.setItem('username', username);
            localStorage.setItem('password', password); 
        }

        setUserInfo((prev) => ({...prev, errorMessage}));
    }

    function getInfo (e, key) {
        const value = e.target.value.trim();
        setUserInfo((prev) => ({...prev, [inputInfo[key].className]: value}));
    }

    return ( 
        <div className='register-page'>
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
                    {userInfo.errorMessage === '注册成功！' ? 
                    <React.Fragment>
                        去
                        <NavLink to='/login'>登录</NavLink>
                    </React.Fragment>  : ''}
                </div>
                <button onClick={CheckRegister} type='submit'>注册</button>
            </form>
        </div>
     ); 
}

export default Register;