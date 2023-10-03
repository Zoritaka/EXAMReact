import React from "react";
import './style/Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    function Player({}){
        return (
            <body>
                <div class="container">
                    <div class="logo">
                        <img src={require("./img/spider.png")} alt=""/>
                        <Link to={"/"}>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</Link>
                    </div>
                    <div class="block_form">
                        <div class="block_main">
                            <div class="txt">Login</div>
                            <div class="block">
                                <div class="block_child">
                                    <img src={require("./img/userReg.png")}/>
                                    <input class="userName" type="text" placeholder="Username"/>
                                </div>
                            </div><br/>
                            <div class="block">
                                <div class="block_child">
                                    <img src={require("./img/lock.png")} alt=""/>
                                    <input class="password" type="password" placeholder="Password"/>                                
                                </div>
                            </div><br/><br/>
                            <button class="btnSubmit">Entrance</button>
                            <a href="Registration.html">Unregistered?</a>
                        </div>
                    </div>
                </div>
                <script src="./script/Login-script.js"></script>
            </body>
        );
    }//Player()

    return (
        <Player

        />
    );
}

export default Login;