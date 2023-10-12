import React, { useState, useEffect } from "react";
import './style/Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
    const [Blink, setBlink] = useState('');
    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem("User"))
        if(user != null){
            if(user.login == true){
                setBlink('/Profile')
            }else{
                setBlink('/Login')
            }
        }
        else{
            setBlink('/Login')
        }
    });
    function ButtonUser() {
        return (
            <Link to={Blink}>
                <button className="HUser">
                    <img src={require("./img/user.png")}/>
                </button>
            </Link>
        );
    }
    function Player({}){
        return (
            <div className="Home">
                <div class="HNavbar">
                    <Link to={'/'} className="HTitle">
                        <img src={require("./img/spider.png")}/>
                        <h2>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</h2>
                    </Link>
                    <div className="HSearch">
                        <button><img src={require("./img/search.png")}/></button>
                        <input type="text" placeholder="Sword Art Online"/>
                    </div>
                    <div className="HNavbar_Btn">
                        <Link to={"/Cart"} className="HShop">
                            <img src={require("./img/shop.png")}/>
                        </Link>
                        <ButtonUser
                            src = {'/Login'}
                        />
                    </div>
                </div>
                <button onclick="topFunction()" id="myBtn">
                    <img src={require("./img/up-arrow.png")}/>     
                </button>
            </div>
        );
    }//Player()

    return (
        <Player

        />
    );
}

export default Home;