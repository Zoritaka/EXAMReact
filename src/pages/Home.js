import React, { useState, useEffect } from "react";
import './style/Home.css';
import { Link } from 'react-router-dom';


const Home = () => {
    const [Blink, setBlink] = useState('');
    const [Ilink, setIlink] = useState('');
    let user = JSON.parse(localStorage.getItem("User"))
    useEffect(()=>{
        if(user != null){
            if(user.login == true){
                setBlink('/Profile')
                setIlink('/Item')
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
    function ButtonBuy({genre, img, desc, sale}){
        for (var i=0; i < user.subs; i++){
            if(user.subs[i] == genre){
                return (
                    <Link to={Ilink} onClick={() =>
                    subBuy(genre,img,desc,sale)}>Buy now!</Link>
                );
            }   
        }
        return (
            <Link to={Ilink} onClick={() =>
            subBuy(genre,img,desc,sale)}>purchased!</Link>
        );
    }
    function subBuy(genre, img, desc, sale){
        let user = JSON.parse(localStorage.getItem("User"))
        if (user.login == true){
            const item = {
                description: desc,
                img: img,
                genre: genre,
                sale: sale,
            }
            localStorage.setItem("Item", JSON.stringify(item))
        }
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
                <div className="HSpace"></div>
 
                <div className="HAnimeSlider">
                    <div className="HAnimeBlock v1">
                        <div className="HImgAnime">
                            <img src={"https://cdn.myanimelist.net/images/anime/1164/138058.webp"} alt=""/>
                        </div>
                        <div className="HAnimeBlock_Txt">
                            <h1>Подписка №1</h1>
                            <p>Готовьтесь к адреналину и бескомпромиссным битвам с нашей интенсивной подпиской на аниме жанра <b>экшен</b>!! С более чем 100 сериалами, переполненными эпическими схватками и невероятной динамикой, вы окажетесь в самой гуще событий. Сильнейшие герои, захватывающие сюжеты и нон-стоп экшен - все это ждет вас на нашем сайте!</p>                                
                            <p>Подпишитесь и вступите в битву прямо сейчас!</p>
                            <ButtonBuy
                                genre={'Action'}
                                img={'https://cdn.myanimelist.net/images/anime/1164/138058.webp'}
                                desc={'Подписка на нашем сайте предоставляет вам неограниченный доступ к более чем 100 аниме-сериалам жанра экшен! Насладитесь захватывающими приключениями, эпическими битвами и уникальными персонажами, представленными в нашей богатой коллекции! Никакой рекламы, моментальный доступ, и регулярные обновления контента обеспечивают незабываемый опыт просмотра. Погрузитесь в мир аниме и оставайтесь в центре событий с нашей подпиской!'}
                                sale={1099}
                            />
                        </div>
                    </div>
                    <div className="HAnimeBlock v2">
                        <div className="HImgAnime">
                            <img src={"https://cdn.myanimelist.net/images/anime/1171/109222.webp"} alt=""/>
                        </div>
                        <div className="HAnimeBlock_Txt">
                            <h1>Подписка №2</h1>
                            <p>Волшебство и приключения ждут вас с нашей прекрасной подпиской на аниме жанра <b>фэнтези</b>!! Свыше 100 захватывающих сериалов, полных волшебства, драконов и загадочных миров, готовы покорить ваши сердца! Почувствуйте вдохновение и оживите свои мечты с героями и приключениями, которые вы найдете только у нас!</p>
                            <p>Волшебство начинается прямо сейчас!</p>
                            <ButtonBuy
                                genre={'Fantasy'}
                                img={'https://cdn.myanimelist.net/images/anime/1171/109222.webp'}
                                desc={'Волшебство и приключения ждут вас с нашей прекрасной подпиской на аниме жанра фэнтези!! Свыше 100 захватывающих сериалов, полных волшебства, драконов и загадочных миров, готовы покорить ваши сердца! Почувствуйте вдохновение и оживите свои мечты с героями и приключениями, которые вы найдете только у нас! Волшебство начинается прямо сейчас!'}
                                sale={1099}
                            />
                        </div>
                    </div>
                    <div className="HAnimeBlock v3"> 
                        <div className="HImgAnime">
                            <img src={"https://cdn.myanimelist.net/images/anime/1305/132237.webp"} alt=""/>
                        </div>
                        <div className="HAnimeBlock_Txt">
                            <h1>Подписка №3</h1>
                            <p>Погрузитесь в захватывающие приключения с нашей эпичной подпиской на аниме жанра <b>приключения</b>!! Наши полностью подключенные 100+ сериалов откроют перед вами удивительные миры, загадочные заговоры и бескрайние возможности! Откройте двери воображения и отправьтесь в невероятные путешествия вместе с героями, которые ждут вас на нашем сайте!</p>
                            <p>Не упустите свой шанс стать частью эпических историй!</p>
                            <ButtonBuy
                                genre={'Adventure'}
                                img={'https://cdn.myanimelist.net/images/anime/1305/132237.webp'}
                                desc={'Погрузитесь в захватывающие приключения с нашей эпичной подпиской на аниме жанра приключения!! Наши полностью подключенные 100+ сериалов откроют перед вами удивительные миры, загадочные заговоры и бескрайние возможности! Откройте двери воображения и отправьтесь в невероятные путешествия вместе с героями, которые ждут вас на нашем сайте! Не упустите свой шанс стать частью эпических историй!'}
                                sale={1099}
                            />
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }//Player()

    return (
        <Player

        />
    );
}

export default Home;