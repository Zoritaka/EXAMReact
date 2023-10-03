import React from "react";
import './style/Home.css';
import { Link } from 'react-router-dom';

function addToCart({id}){
    // localStorage.removeItem("Items")
    let items = JSON.parse(localStorage.getItem("Items")) || []
    items.push(id)
    localStorage.setItem("Items", JSON.stringify(items))
  }

function funcLogin({m}) {
    let user = JSON.parse(localStorage.getItem("User"))
    if(user == null){
      document.location.href = "Login.html";
    }
    else{
      if(user.login == true){
        document.location.href = "profile.html";
      }
      else{
        document.location.href = "Login.html";
      }
    }
}

const Home = () => {
    function Player({}){
        return (
            <body>
                <div class="Home">
                    <div class="Navbar">
                        <Link to={'/'} class="Title">
                            <img src={require("./img/spider.png")}alt=""/>
                            <h2>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</h2>
                        </Link>
                        <div class="Search">
                            <button class="btnSearch1"><img src={require("./img/search.png")} alt=""/></button>
                            <input class="txtSearch1" type="text" placeholder="Sword Art Online"/>
                        </div>
                        <div class="Navbar_Btn">
                            <Link to={"/Cart"} class="Shop"><img src={require("./img/shop.png")}/></Link>
                            <button class="User"><img src={require("./img/user.png")}/></button>
                        </div>
                    </div>
                    
                    <div class="Space"></div>
                    <div class="AnimeSlider">
 
                    </div>
                    <div class="MainBlock">

                    <div class="ListAnime">
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