import React from "react";
import style from "./style.module.css";
import img from "../../assets/insta.svg";
import { FooterTop } from "./footer";

export const Footer = () => {
    return (
        <>
            <FooterTop />
            <footer>
                <div className={style.container}>
                    <div className={style.MainBlock}>
                        <ul className={style.first_block}>
                            <li className={style.firstItem}>
                                <a className={style.firstLinkk} href="#">
                                    Продукция
                                </a>
                            </li>
                            <li className={style.firstItem}>
                                <a className={style.firstLink} href="#">
                                    Колбасные и мясные изделия
                                </a>
                            </li>
                            <li className={style.firstItem}>
                                <a className={style.firstLink} href="#">
                                    Молочные продукты
                                </a>
                            </li>
                        </ul>
                        <div>
                            <p>
                                <a className={style.link} href="#">
                                    Морепродукты Пиво
                                </a>
                            </p>
                        </div>
                        <div>
                            <p>
                                <a className={style.link} href="#">
                                    Замороженные продукты Мед
                                </a>
                            </p>
                        </div>
                        <div>
                            <p>
                                <a className={style.link} href="#">
                                    Свежие овощи
                                </a>
                            </p>
                            <p>
                                <a className={style.link} href="#">
                                    Свежие фрукты
                                </a>
                            </p>
                        </div>
                    </div>
                    <ul className={style.contactBlock}>
                        <li>
                            <a className={style.contacts} href="#">
                                О компании
                            </a>
                        </li>
                        <li>
                            <a className={style.contacts} href="#">
                                Наши магазины
                            </a>
                        </li>
                        <li>
                            <a className={style.contacts} href="#">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className={style.hr} />
                <div className={style.container}>
                    <div className={style.FooterBlock}>
                        <p>
                            <a className={style.footerText} href="#">
                                2016–2021 © ООО «ПД Реснота»
                            </a>
                        </p>
                        <ul className={style.social}>
                            <li>
                                <a href="#">
                                    <img src={img} alt="#" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={img} alt="#" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={img} alt="#" />
                                </a>
                            </li>
                        </ul>
                        <p>
                            <a className={style.lastText} href="#">
                                Разработка и продвижение сайта — SEOabsolut
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
