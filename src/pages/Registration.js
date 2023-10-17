import React, { useState, useEffect } from "react";
import './style/Registration.css';
import { Link } from 'react-router-dom';
const Registration = () => {
    const [userName, setName] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCon, setPasswordCon] = useState('');
    const [check1, setCheck1] = useState(0);
    const [check2, setCheck2] = useState(0);
    const [sex, setSex] = useState('Male');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [Blink, setBlink] = useState('');

    function ButtonReg() {
        return (
            <Link className="RbtnSubmit" to={Blink} onClick={click}>
                <p className="RbtnSubmit">
                    SUBMIT
                </p>
            </Link>
        );
    }
    const user = {
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        sex: sex,
        birthday: date,
        password: password,
        subs: [],
        login: false //проверка, зашел ли сейчас пользователь
    }
    function click({}){
        // alert('password: ' + password +
        //  '\n passwordCon: ' + passwordCon +
        //  '\n firstName: ' + firstName +
        //  '\n lastName: ' + lastName +
        //  '\n userName: ' + userName +
        //  '\n check1: ' + check1 +
        //  '\n check2: ' + check2 + 
        //  '\n sex: ' + sex + 
        //  '\n date: ' + date + 
        //  '\n email: ' + email)
        if(password != '' && passwordCon != '' && userName != '' &&
            firstName != '' && lastName != '' && check1 != 0 &&
            check2 != 0 && sex != '' && email != ''){
            if (password == passwordCon && email.split('@').length > 1){
                localStorage.setItem("User", JSON.stringify(user))
                //alert('done!')
            }
        }
        else{
            alert('Error!')
        }
    }
    useEffect(()=>{
        if(password != '' && passwordCon != '' && userName != '' &&
            firstName != '' && lastName != '' && check1 != 0 &&
            check2 != 0 && sex != '' && email != ''){
            if (password == passwordCon && email.split('@').length > 1){
                setBlink('/Thanks')
            }
        }
    });
    function Player({}){
        return (
            <form action="">
                <div className="Rcontainer">
                    <div className="Rlogo">
                        <img src={require("./img/spider.png")} alt=""/>
                        <Link to={"/"}>𝐀𝐧𝐢𝐦𝐞̷𝐒𝐭𝐨𝐫𝐞</Link>
                    </div>
                    <div className="Rblock_form">
                        <div className="Rblock_main">
                            <div className="Rtxt">
                                <div>Registration form</div>
                                <div>Personal details</div>
                            </div>
                            <div className="Rblock2">
                                <div className="Rblock_child">
                                    <img src={require("./img/userReg.png")} alt=""/>
                                    <input className="RuserName" type="text" placeholder="Username"
                                    value={userName}
                                    onChange={(str) => setName(str.target.value)}
                                    />
                                </div>
                                <div className="Rblock_child2">
                                    <input className="RfirstName" type="text" placeholder="First name"
                                        value={firstName}
                                        onChange={(str) => setfirstName(str.target.value)}
                                        />
                                    <input className="RlastName" type="text" placeholder="Last name"
                                        value={lastName}
                                        onChange={(str) => setlastName(str.target.value)}/>
                                </div>
                            </div><br/>
                            <div className="Rblock2">
                                <div className="Rblock_child">
                                <img src={require("./img/email.png")} alt=""/>
                                <input className="Remail" type="email" placeholder="Email address"
                                    value={email}
                                    onChange={(str) => setEmail(str.target.value)}/>
                                </div>
                                <div className="Rblock_child2">
                                    <select className="RselectSex" value={sex} onChange={(str) => setSex(str.target.value)}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="GIGACHAD">GIGACHAD</option>
                                    </select>
                                    <input className="Rdate" type="date" value={date}
                                        onChange={(str) => setDate(str.target.value)}/>
                                </div>
                            </div><br/>
                            <div className="Rblock3">
                                <div className="Rblock_child">
                                    <img src={require("./img/lock.png")} alt=""/>
                                    <div className="Rblock_child2">
                                        <input className="Rpassword1"  type="password" placeholder="Password"
                                            value={password}
                                            onChange={(str) => setPassword(str.target.value)}/>
                                        <input className="Rpassword2" type="password" placeholder="Confirm password"
                                            value={passwordCon}
                                            onChange={(str) => setPasswordCon(str.target.value)}/>
                                    </div>
                                </div>
                            </div><br/><br/>
                            <div className="Rblock_check">
                                <div>
                                    <input className="Rrule1" type="radio" onChange={setCheck1(1)}/>
                                    I want to recieve mews and special offers
                                </div><br/>
                                <div>
                                    <input className="Rrule2" type="radio" onChange={setCheck2(1)}/>
                                    I agree with the Teams and Conditions
                                </div><br/>
                            </div>
                            <ButtonReg/>
                        </div>
                    </div>
                </div>

            </form>
        );
    }//Player()

    return (
        <Player

        />
    );
}

export default Registration;