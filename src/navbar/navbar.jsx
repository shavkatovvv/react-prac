import React from "react";
import style from "./style.module.css"


export const Navbar = () => {
    return(
        <div className={style.block}>
            <div className={style.container}>
            <div className={style.wrapper}>
            <ul className={style.list}>
                <li>
                    <a className={style.link} href="#">О ресноте</a>
                </li>
                <li>
                    <a className={style.link} href="#">каталог</a>
                </li>
                <li>
                    <a className={style.link} href="#">наши магазины</a>
                </li>
                <li>
                    <a className={style.link} href="#">контакты</a>
                </li>
            </ul>


            <form method="post">
                <input className={style.input} type="search" placeholder="Поиск по сайту" name="input" />
            </form>
            </div>
            
            </div>
            
        </div>
    )
}