import React, { useState } from 'react';
import { busynessNumberHyphen } from '../../../../utils/funtion';

const LookupForm = ({ style }) => {
    const [businessNumber, setBusinessNumber] = useState("");
    const [businessName, setBusinessName] = useState("");

    const OnSubmit = (e) => {
        e.preventDefault();
        // if (!businessNumber) {
        //     return window.alert('사업자 번호를 입력해 주세요');
        // }
        window.location.href = `/lookup/client?number=${businessNumber}&name=${businessName}`
    }

    const OnChange = (e) => {
        const { value,name } = e.target;

        switch (name) {
            case "number":
                if (e.nativeEvent.data !== null && value.length === 13) {
                    return;
                }
                if (isNaN(e.nativeEvent.data)) {
                    setBusinessNumber("");
                    return window.alert("숫자만 입력이 가능합니다.")
                }
                let str = value
                str = busynessNumberHyphen(e.nativeEvent.data  ,value)
                setBusinessNumber(str);
                break;
            case "name":
                setBusinessName(value);
                break;
            default:
                break;
        }
    }
    return (
        <>
        <form name='number' onSubmit={OnSubmit} className={style.search__form}>
            <div>
                <p>사업자번호로 조회하기</p>
                <input type="text" name="number" value={businessNumber} onChange={OnChange} className={style.search__input} />
            </div>
            <div>
                <button className={style.search__button}>조회</button>
            </div>
            <div>
                <p>사업자이름으로 조회하기</p>
                <input type="text" name="name" value={businessName} onChange={OnChange} className={style.search__input} />
            </div>
            <div>
                <button className={style.search__button}>조회</button>
            </div>
        </form>
        </>
    );
};

export default LookupForm;