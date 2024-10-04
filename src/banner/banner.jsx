import React from "react";
import style from "./style.module.css"
import banner from "../assets/banner.png"

export const Banner = () => {
    return(
        <div className={style.box}>
            <div className={style.container}>
            <div className={style.title_block}>
                <h2 className={style.title}>Истина в качестве</h2>
                <p className={style.text}>КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ ПИТАНИЯ:
КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ,
ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ</p>
                <a className={style.link} href="#">Купить</a>
            </div>
            </div>
            
        </div>
    )
}