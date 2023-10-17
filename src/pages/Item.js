import React, { useState, useEffect } from "react";
import './style/Item.css';
import { Link } from 'react-router-dom';


const Profile = () => {
    const item = JSON.parse(localStorage.getItem("Item"))
    const [Blink, setBlink] = useState('');
    const [Ilink, setIlink] = useState('');
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
                <button className="IUser">
                    <img src={require("./img/user.png")}/>
                </button>
            </Link>
        );
    }
    function buy(){
        item.subs.push(item.genre)
        localStorage.setItem("Item", JSON.stringify(item))
    }
    function Player({}){
        return (
            <body>
                <div className="INavbar">
                    <Link to={"/"} className="ITitle">
                        <img src={require("./img/spider.png")}/>
                        <h2>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</h2>
                    </Link>
                    <div className="ISearch">
                        <button className="PbtnSearch1"><img src={require("./img/search.png")}/></button>
                        <input className="PtxtSearch1" type="text" placeholder="Sword Art Online"/>
                    </div>
                    <div className="INavbar_Btn">
                        <ButtonUser/>
                    </div>
                </div>
                <div className="ISpace"></div>
                <div className="IMainBlock">
                    <div className="Iblock ">
                        <div className="IblockImg">
                            <img src={item.img} alt=""/>
                        </div>
                        <div className="Itxt">
                            <div className="Itxt2">
                                <div>
                                    <h2>{item.genre}</h2>
                                    <h3>Sale: {item.sale}тг</h3>
                                </div>
                                <Link to={'/Thanks2'} onClick={()=> buy}>Buy Now</Link>
                            </div>
                            <p>{item.description}</p>
                        </div>
                    </div>
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