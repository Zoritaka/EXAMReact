import React from "react";
import './style/profile.css';
import { Link } from 'react-router-dom';

function func({m}) {
    return (
        7
    );
}

const Profile = () => {
    function Player({}){
        return (
            <body>
                <div class="Home">
                    <div class="Navbar">
                        <Link to={"/Home"} class="Title">
                            <img src={require("./img/spider.png")}/>
                            <h2>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</h2>
                        </Link>
                        <div class="Search">
                            <button class="btnSearch1"><img src={require("./img/search.png")}/></button>
                            <input class="txtSearch1" type="text" placeholder="Sword Art Online"/>
                        </div>
                        <div class="Navbar_Btn">
                            <Link to={"/Cart"} class="Shop"><img src={require("./img/shop.png")}/></Link>
                            <button class="User"><img src={require("./img/user.png")}/></button>
                        </div>
                    </div>
                    
                    <div class="Space"></div>

                    <div class="MainBlock">
                        <h1>꧁༺ 𝓨𝓸𝓾𝓻 𝓹𝓻𝓸𝓯𝓲𝓵𝓮 ༻꧂</h1>
                        <div class="block">

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