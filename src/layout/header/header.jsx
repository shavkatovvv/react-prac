import React from "react";
import style from "./style.module.css"
import logo from "../../assets/logo.svg"
import star from "../../assets/star.svg"
import bag from "../../assets/bag.svg"
import { Navbar } from "../../navbar";


export const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.container}>
            <div className={style.block}>
                <div className={style.logo_block}>
                    <img src={logo} alt="logo" />

                    <p className={style.text}>Колбасы и мясные деликатесы</p>
                </div>


                <div className={style.another}>
                    <img src={star} alt="star" />


                    <div className={style.box}>
                        <img src={bag} alt="bag" />

                        <div>
                            <span className={style.price}>Товаров: 3
                            6 540 ₽</span>
                        </div>
                    </div>
                </div>

            

            </div>


           
            </div>

            <div>
                <Navbar/>
            </div>
            
        </header>
    )
}