import React, { useState, useEffect } from "react";
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
                }
            }
        }
    }
    function ButtonLogin() {
        return (
            <Link to={Blink}>
                <button className="LbtnSubmit" onClick={submit}>
                    Entarence
                </button>
            </Link>
        );
    }
    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("User"))
        if (user != null){
            if(name != '' || password != ''){
                if(user.userName == name && user.password == password){
                    setBlink('/')
                }
            }
        }
    });
    function Player({}){
        return (//Zoritaka
            <form action="">
                <div className="Lcontainer">
                    <div className="Llogo">
                        <img src={require("./img/spider.png")} alt=""/>
                        <Link to={"/"}>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</Link>
                    </div>
                    <div className="Lblock_form">
                        <div className="Lblock_main">
                            <div className="Ltxt">Login</div>
                            <div>
                                <div className="Lblock_child">
                                    <img src={require("./img/userReg.png")}/>
                                    <input 
                                        className="LuserName"
                                        type="text"
                                        placeholder="Username"
                                        value={name}
                                        onChange={(str) => setName(str.target.value)}
                                    />
                                </div>
                            </div><br/>
                            <div>
                                <div className="Lblock_child">
                                    <img src={require("./img/lock.png")} alt=""/>                                    
                                    <input 
                                        className="Lpassword"
                                        type="password"
                                        placeholder="password"
                                        value={password}
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