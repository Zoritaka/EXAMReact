import React, { useState, useEffect } from "react";
import './style/profile.css';
import { Link } from 'react-router-dom';


const Profile = () => {
    const user = JSON.parse(localStorage.getItem("User"))
    
    function signOut(){
        let user = JSON.parse(localStorage.getItem("User"))
        user.login = false
        localStorage.setItem("User", JSON.stringify(user))
        document.location.href = "Login.html";
    }
    function Player({}){
        return (
            <body>
                <div className="Home">
                    <div className="Navbar">
                        <Link to={"/Home"} class="Title">
                            <img src={require("./img/spider.png")}/>
                            <h2>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</h2>
                        </Link>
                        <div className="Search">
                            <button className="btnSearch1"><img src={require("./img/search.png")}/></button>
                            <input className="txtSearch1" type="text" placeholder="Sword Art Online"/>
                        </div>
                        <div className="Navbar_Btn">
                            <Link to={"/Cart"} class="Shop"><img src={require("./img/shop.png")}/></Link>
                            <button className="User"><img src={require("./img/user.png")}/></button>
                        </div>
                    </div>
                    
                    <div className="SpacePro"></div>

                    <div className="MainBlockPro">
                        <h1>꧁༺ 𝓨𝓸𝓾𝓻 𝓹𝓻𝓸𝓯𝓲𝓵𝓮 ༻꧂</h1>
                        <div className="blockPro">
                            <div class="blockImgg">
                                <img src={require("./img/icon.png")} alt=""/>
                            </div>
                            <div class="txt">
                                <h2>{user.userName}</h2>
                                <h3>Money: 0тг</h3>
                                <h3>email: {user.email}</h3>
                            </div>
                            <div class="txt">
                                <h2>{user.sex}</h2>
                                <h3>Birthday: {user.birthday}</h3>
                                <h3>password: {user.password}</h3>
                                <button class="signOut" onClick={signOut}>sign out</button>
                            </div>
                        </div>
                    </div>
                    <button onclick="topFunction()" id="myBtn">
                        <img src={require("./img/up-arrow.png")}/>     
                    </button>
                </div>
                <script src="./script/profile-script.js"></script>
            </body>
        );
    }//Player()

    return (
        <Player

        />
    );
}

export default Profile;