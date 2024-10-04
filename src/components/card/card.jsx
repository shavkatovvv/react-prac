import React from "react";
import { data } from "../../card_mid/data";
import style from "./style.module.css";

export const Cards = () => {
    return (
        <div className={style.container}>
            <ul className={style.list}>
                {data.map((item) => {
                    return (
                        <li>
                            <img src={item.img} alt="img" />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
