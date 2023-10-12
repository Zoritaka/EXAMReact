import React, { useState, useEffect } from "react";
import './style/profile.css';
import { Link } from 'react-router-dom';

const Thanks = () => {
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

export default Thanks;