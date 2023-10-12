import React, { useState, useEffect } from "react";
import './style/Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
    const [Blink, setBlink] = useState('');
    function addToCart({id}){
        // localStorage.removeItem("Items")
        let items = JSON.parse(localStorage.getItem("Items")) || []
        items.push(id)
        localStorage.setItem("Items", JSON.stringify(items))
      }
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
                <button className="User">
                    <img src={require("./img/user.png")}/>
                </button>
            </Link>
        );
    }
    function Player({}){
        return (
            <body>
                <div className="Home">
                    <div class="Navbar">
                        <Link to={'/'} className="Title">
                            <img src={require("./img/spider.png")}alt=""/>
                            <h2>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</h2>
                        </Link>
                        <div className="Search">
                            <button className="btnSearch1"><img src={require("./img/search.png")} alt=""/></button>
                            <input className="txtSearch1" type="text" placeholder="Sword Art Online"/>
                        </div>
                        <div className="Navbar_Btn">
                            <Link to={"/Cart"} className="Shop"><img src={require("./img/shop.png")}/></Link>
                            <ButtonUser
                                src = {'/Login'}
                            />
                        </div>
                    </div>
                    
                    <div className="AnimeSlider">
 
                    </div>
                    <div className="MainBlock">

                        <div className="ListAnime">
                        </div>
                    </div>
                    <button onclick="topFunction()" id="myBtn">
                        <img src={require("./img/up-arrow.png")}/>     
                    </button>
                    
            
                </div>
                <script src="./script/Home-script.js"></script>
            </body>
        );
    }//Player()

    return (
        <Player

        />
    );
}

export default Home;