import React, { useState, useEffect } from "react";
import './style/Thanks.css';
import { Link } from 'react-router-dom';

const Thanks = () => {
    function Player({}){
        return (
            <body>
                <div className="Tcontainer">
                    <h1>꧁༺Thank you for registering! ༻꧂</h1>
                    <div>
                        <img src={require("./img/girl8.png")} alt=""/>
                    </div>
                    <h2><Link to={"/Login"}>Login to your account</Link></h2>
                </div>
            </body>
        );
    }//Player()

    return (
        <Player

        />
    );
}

export default Thanks;