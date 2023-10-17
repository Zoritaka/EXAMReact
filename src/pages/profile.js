import React, { useState, useEffect } from "react";
import './style/profile.css';
import { Link } from 'react-router-dom';


const Profile = () => {
    const user = JSON.parse(localStorage.getItem("User"))
    
    function signOut(){
        let user = JSON.parse(localStorage.getItem("User"))
        user.login = false
        localStorage.setItem("User", JSON.stringify(user))
    }
    function Player({}){
        return (
            <body>
                <div className="PHome">
                    <div className="PNavbar">
                        <Link to={"/"} className="PTitle">
                            <img src={require("./img/spider.png")}/>
                            <h2>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</h2>
                        </Link>
                        <div className="PSearch">
                            <button className="PbtnSearch1"><img src={require("./img/search.png")}/></button>
                            <input className="PtxtSearch1" type="text" placeholder="Sword Art Online"/>
                        </div>
                        <div className="PNavbar_Btn">
                            <button className="PUser"><img src={require("./img/user.png")}/></button>
                        </div>
                    </div>
                    <div className="PSpace"></div>

                    <div className="PMainBlock">
                        <h1>꧁༺ 𝓨𝓸𝓾𝓻 𝓹𝓻𝓸𝓯𝓲𝓵𝓮 ༻꧂</h1>
                        <div className="Pblock ">
                            <div className="PblockImg">
                                <img src={require("./img/icon.png")} alt=""/>
                            </div>
                            <div className="Ptxt">
                                <h2>{user.userName}</h2>
                                <h3>Money: 0тг</h3>
                                <h3>email: {user.email}</h3>
                            </div>
                            <div className="Ptxt">
                                <h2>{user.sex}</h2>
                                <h3>Birthday: {user.birthday}</h3>
                                <h3>password: {user.password}</h3>
                                <Link to={'/'} className="PsignOut" onClick={signOut}>sign out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        );
    }//Player()

    return (
        <Player

        />
    );
}

export default Profile;