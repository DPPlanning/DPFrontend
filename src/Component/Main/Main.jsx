import React from 'react';
import MyClient from './Main/MyClient/MyClient';
import style from './Main.module.css';
import NaverApi from './Main/NaverApi/NaverApi';

const Main = () => {

    return (
        <div>
            <MyClient style={style} />
            <NaverApi style={style} />
        </div>
    );
};

export default Main;