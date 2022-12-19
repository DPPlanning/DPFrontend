import React from 'react';
import style from './Header.module.css';
const Header = ({title}) => {
    return (
        <div className={style.stat__header}>
            <ul className={style.stat__header_list}>
                <li>
                    <a href="/API/naver">
                    네이버 API 키등록
                    </a>
                </li>
                <li>
                    <a href="/API/facebook">
                        페이스북 API 키등록
                    </a>
                </li>
                <li>
                    <a href="/API/google">
                        구글 API 키등록
                    </a>
                </li>
            </ul>
            <hr />
            <h3 className={style.stat__header_title}>{title}</h3>
        </div>
    );
};

export default Header;