import React from "react";
import { tab } from "../../tab_rend/tab";
import { tab_2 } from "../../tab_rend/tab_2";
import { tab_3 } from "../../tab_rend/tab_3";
import style from "./style.module.css";

export const Tab = () => {
    const [count, setCount] = React.useState(1);
    const content =
        count == 1 ? tab : count == 2 ? tab_2 : count == 3 ? tab_3 : [];
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.btn_wrapper}>
                    <button
                        onClick={() => setCount(1)}
                        className={style.tab_btn}
                    >
                        Хиты
                    </button>
                    <button
                        onClick={() => setCount(2)}
                        className={style.tab_btn}
                    >
                        Скидки
                    </button>
                    <button
                        onClick={() => setCount(3)}
                        className={style.tab_btn}
                    >
                        Новинки
                    </button>
                </div>

                <ul className={style.list}>
                    {content.map((item) => {
                        return (
                            <li className={style.item}>
                                <img src={item.img} alt="img" />

                                <h2 className={style.title}>{item.title}</h2>
                                <p className={style.text}>{item.des}</p>
                                <p className={style.price}>{item.price}</p>
                                <div className={style.wrap}>
                                    <span className={style.pr}>{item.pr}</span>
                                    <p className={style.econom}>
                                        {item.econom}
                                    </p>
                                </div>
                                <div className={style.btn_wrap}>
                                    <button className={style.btn}>
                                        {item.btn}
                                    </button>
                                    <button className={style.btn_2}>
                                        {item.btn_2}
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
