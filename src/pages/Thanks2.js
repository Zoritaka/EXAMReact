import React, { useState, useEffect } from "react";
import './style/Thanks.css';
import { Link } from 'react-router-dom';

const Thanks2 = () => {
    function Player({}){
        return (
            <body>
                <div className="Tcontainer">
                    <h1>꧁༺Thank you for your purchase!༻꧂</h1>
                    <div>
                        <img src={require("./img/girl5.png")} alt=""/>
                    </div>
                    <h2><Link to={"/"}>Go back to main page</Link></h2>
                </div>
            </body>
        );
    }//Player()

    return (
        <Player

        />
    );
}

export default Thanks2;