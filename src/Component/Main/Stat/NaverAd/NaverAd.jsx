import React from 'react';
import Header from '../Header/Header';
import ClientList from './component/ClientList';
import style from './NaverAd.module.css';
const NaverAd = () => {
    
    return (
        <div  className={style.naver__main} >
            <Header title={'네이버 보고서'} />
           {/* 부트스트랩 칸을 4칸으로 나눈 div 박스 */}
           <div className={style.naver__main_box}>
                <ClientList />
           </div>
        </div>
    );
};

export default NaverAd;