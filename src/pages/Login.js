import React, { useState } from "react";
import './style/Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [Blink, setBlink] = useState('');
    function submit(){
        let user = JSON.parse(localStorage.getItem("User"))
        if (user != null){
            if(name != '' || password != ''){
                if(user.userName == name && user.password == password){
                    user.login = true
                    localStorage.setItem("User", JSON.stringify(user))
                    setBlink('/')
                }
            }
        }
    }
    function ButtonLogin() {
        return (
            <Link to={Blink}>
                <button className="btnSubmit" onClick={() => submit(name, password)}>
                    Entarence
                </button>
            </Link>
        );
    }

    function Player({}){
        return (
            <form action="">
                <div className="container">
                    <div className="logoLog">
                        <img src={require("./img/spider.png")} alt=""/>
                        <Link to={"/"}>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</Link>
                    </div>
                    <div className="block_form">
                        <div className="block_main">
                            <div className="txt">Login</div>
                            <div className="blockLog">
                                <div className="block_child">
                                    <img src={require("./img/userReg.png")}/>
                                    <input 
                                        className="userName"
                                        type="text"
                                        placeholder="Username"
                                        onChange={(str) => setName(str.target.value)}
                                    />
                                </div>
                            </div><br/>
                            <div className="blockLog">
                                <div className="block_child">
                                    <img src={require("./img/lock.png")} alt=""/>                                    
                                    <input 
                                        className="password"
                                        type="password"
                                        placeholder="password"
                                        onChange={(str) => setPassword(str.target.value)}
                                    />                               
                                </div>
                            </div><br/><br/>
                            <ButtonLogin/>
                            <Link to={"/Registration"}>Unregistered?</Link>
                        </div>
                    </div>
                </div>
            </form>
        );
    }//Player()

    return (
        <Player

        />
    );
}

export default Login;