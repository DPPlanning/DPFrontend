import React from 'react';
import style from './Header.module.css';
const Header = ({title}) => {
    return (
        <div className={style.stat__header}>
            <ul className={style.stat__header_list}>
                <li>
                    <a href="/stat/naver">
                    네이버 보고서
                    </a>
                </li>
                <li>
                    <a href="/stat/facebook">
                        페이스북 보고서
                    </a>
                </li>
                <li>
                    <a href="/stat/google">
                        구글 보고서
                    </a>
                </li>
                <li>
                    <a href="/stat/all">
                        종합 보고서
                        </a>
                </li>
            </ul>
            <hr />
            <h3 className={style.stat__header_title}>{title}</h3>
        </div>
    );
};

export default Header;