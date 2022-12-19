import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LookupForm = ({ style }) => {
    let navigate = useNavigate();
    const [businessNumber, setBusinessNumber] = useState("")

    const OnSubmit = (e) => {
        e.preventDefault();
        if (!businessNumber) {
            return window.alert('사업자 번호를 입력해 주세요');
        }
        navigate(`/lookup/client?n=${businessNumber}`);

    }
    const OnChange = (e) => {
        const { value } = e.target;

        if (e.nativeEvent.data !== null && value.length === 12) {
            return;
        }
        if (isNaN(e.nativeEvent.data)) {
            setBusinessNumber("");
            return window.alert("숫자만 입력이 가능합니다.")
        }
        let str = value
        if (e.nativeEvent.data !== null && value.length === 3) {
            str += "-";
        }
        if (e.nativeEvent.data !== null && value.length === 6) {
            str += "-";
        }
        setBusinessNumber(str);
    }
    return (
        <form name='number' onSubmit={OnSubmit} className={style.search__form}>
            <div>
                <input type="text" value={businessNumber} onChange={OnChange} className={style.search__input} />
            </div>
            <div>
                <button className={style.search__button}>조회</button>
            </div>
        </form>
    );
};

export default LookupForm;