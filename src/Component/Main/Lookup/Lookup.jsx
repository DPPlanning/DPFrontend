import React from 'react';
import LookupForm from './component/LookupForm';

import style from './Lookup.module.css'

const Lookup = () => {
    
    return (
        <div className={style.search__section}>
            <h3 className={style.search__title}>
                사업자 번호로 조회하기
            </h3>
            <LookupForm style={style} />
            {/* <form name='name' onSubmit={OnSubmit}  className={style.search__form}>
                <div>
                    <input type="text" className={style.search__input} />
                </div>
                <div>
                    <button className={style.search__button}>상호명으로 조회</button>
                </div>
            </form> */}
        </div>
    );
};

export default Lookup;