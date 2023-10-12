import React, { useState } from "react";
import './style/Registration.css';
import { Link } from 'react-router-dom';
const Registration = () => {
    const [userName, setName] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCon, setPasswordCon] = useState('');
    const [Blink, setBlink] = useState('');
    function submit(){
        let user = JSON.parse(localStorage.getItem("User"))
        if (user != null){
            if(userName != '' || password != ''){
                if(user.userName == userName && user.password == password){
                    user.login = true
                    localStorage.setItem("User", JSON.stringify(user))
                    setBlink('/')
                }
            }
        }
    }
    function ButtonReg() {
        return (
            <Link to={Blink}>
                <button className="btnSubmitt" onClick={() => submit(userName, password)}>
                    SUBMIT
                </button>
            </Link>
        );
    }

    function Player({}){
        return (
            <form action="">
                <div class="container">
                    <div className="logoLog">
                        <img src={require("./img/spider.png")} alt=""/>
                        <Link to={"/"}>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</Link>
                    </div>
                    <div class="block_form">
                        <div class="block_main">
                            <div class="txt">
                                <div>Registration form</div>
                                <div>Personal details</div>
                            </div>
                            <div class="block2">
                                <div class="block_child">
                                    <img src={require("./img/userReg.png")} alt=""/>
                                    <input class="userName" type="text" placeholder="Username"/>
                                </div>
                                <div class="block_child2">
                                    <input class="firstName" type="text" placeholder="First name"/>
                                    <input class="lastName" type="text" placeholder="Last name"/>
                                </div>
                            </div><br/>
                            <div class="block2">
                                <div class="block_child">
                                <img src={require("./img/email.png")} alt=""/>
                                <input class="email" type="email" placeholder="Email address"/>
                                </div>
                                <div class="block_child2">
                                    <select class="selectSex">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="GIGACHAD">GIGACHAD</option>
                                    </select>
                                    <input class="date" type="date"/>
                                </div>
                            </div><br/>
                            <div class="block3">
                                <div class="block_child">
                                    <img src={require("./img/lock.png")} alt=""/>
                                    <div class="block_child2">
                                        <input class="password1"  type="password" placeholder="Password"/>
                                        <input class="password2" type="password" placeholder="Confirm password"/>
                                    </div>
                                </div>
                            </div><br/><br/>
                            <div class="block_check">
                                <div>
                                    <input class="rule1" type="radio"/>
                                    I want to recieve mews and special offers
                                </div><br/>
                                <div>
                                    <input class="rule2" type="radio"/>
                                    I agree with the Teams and Conditions
                                </div><br/>
                            </div>
                            <ButtonReg/>
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

export default Registration;