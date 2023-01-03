import React from 'react';
import { useState } from 'react';
import { busynessNumberHyphen } from '../../../../../utils/funtion';
import axios from 'axios';
import { baseUrl } from '../../../../../http/http';
const NaverForm = ({ style }) => {

    const [businessName, setBusinessName] = useState('');
    const [businessNumber, setBusinessNumber] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [accessLicense, setAccessLicense] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const OnChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'businessName':
                setBusinessName(value);
                break;
            case 'businessNumber':
                if (e.nativeEvent.data !== null && value.length === 13) {
                    return;
                }
                if (isNaN(e.nativeEvent.data)) {
                    setBusinessNumber("");
                    return window.alert("숫자만 입력이 가능합니다.")
                }
                let str = value
                str = busynessNumberHyphen(e.nativeEvent.data, value)
                setBusinessNumber(str);

                break;
            case 'customerId':
                setCustomerId(value);
                break;
            case 'accessLicense':
                setAccessLicense(value);
                break;
            case 'secretKey':
                setSecretKey(value);
                break;

            default:
                break;
        }
    }
    const Onsubmit = (e) => {
        e.preventDefault();
        const accessToken = localStorage.getItem('idx');
        const body = {
            businessNumber 
            ,businessName 
            ,customerId 
            ,accessLicense 
            ,secretKey 
        }
        axios({
            url: `${baseUrl}/api/naver`,
            method: "POST",
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${accessToken}`
            },
            data: JSON.stringify(body),
        }).then((result) => {
            console.log(result.data);
           
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <form className={style.api_input__section} onSubmit={Onsubmit}>
            <div>
                <h4>
                    상호명
                </h4>
                <div>
                    <input
                        type="text"
                        value={businessName}
                        onChange={OnChange}
                        name="businessName" />
                </div>
            </div>
            <div>
                <h4>
                    사업자 번호
                </h4>
                <div>
                    <input
                        type="text"
                        value={businessNumber}
                        onChange={OnChange}
                        name="businessNumber" />
                </div>
            </div>
            <div>
                <h4>
                    커스토머 아이디
                </h4>
                <div>
                    <input
                        type="text"
                        value={customerId}
                        onChange={OnChange}
                        name="customerId" />
                </div>
            </div>
            <div>
                <h4>
                    엑세스라이선스
                </h4>
                <div>
                    <input
                        type="text"
                        value={accessLicense}
                        onChange={OnChange}
                        name="accessLicense" />
                </div>
            </div>
            <div>
                <h4>
                    비밀키
                </h4>
                <div>
                    <input
                        type="text"
                        value={secretKey}
                        onChange={OnChange}
                        name="secretKey" />
                </div>
            </div>
            <div>
                <button>등록하기</button>
            </div>
        </form>
    );
};

export default NaverForm;