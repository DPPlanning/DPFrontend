import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { baseUrl } from '../../../../http/http';
import { busynessNumberHyphen } from '../../../../utils/funtion';

const NaverApiList = ({ style, items, index }) => {
    const [showModal, setShowModal] = useState(false);

    const [businessName, setBusinessName] = useState(items.naver_api_business_name);
    const [businessNumber, setBusinessNumber] = useState(items.naver_api_business_number);
    const [customerId, setCustomerId] = useState(items.naver_api_customer_id);
    const [accessLicense, setAccessLicense] = useState(items.naver_api_access_license);
    const [secretKey, setSecretKey] = useState(items.naver_api_secret_key);

    const OnChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "businessName":
                setBusinessName(value);
                break;
            case "businessNumber":
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
                // setBusinessNumber(value);
                break;
            case "customerId":
                if (isNaN(value) && isNaN(e.nativeEvent.data) && e.nativeEvent.data !== "-") {
                    setCustomerId("");
                    return window.alert("숫자만 입력이 가능합니다.")
                }
                setCustomerId(value);
                break;
            case "accessLicense":
                setAccessLicense(value);
                break;
            case "secretKey":
                setSecretKey(value);
                break;
            default:
                break;
        }
    }
    const accessToken = localStorage.getItem('idx');
    const OnSubmit = () => {
        const form = {
            businessName,
            businessNumber,
            customerId,
            accessLicense,
            secretKey,
            naverApiId : items.naver_api_id
        }
        axios({
            url: `${baseUrl}/api/naver`,
            method: "PUT",
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${accessToken}`
            },
            data: JSON.stringify(form),

        }).then((result) => {
            if (result.status === 200) {
                window.location.reload();
            } else {
                window.alert();
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    const OnDelete = () =>{
        if(window.confirm('삭제하시겠습니까?')){
            axios({
                url: `${baseUrl}/api/naver/${items.naver_api_id}`,
                method: "DELETE",
                headers: {
                    "Content-Type": `application/json`,
                    "Authorization": `Bearer ${accessToken}`
                },
    
            }).then((result) => {
                if (result.status === 200) {
                    window.location.reload();
                } else {
                    window.alert();
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    return (
        <>
            <li className={style.naver__api_list_title} key={index}>
                <div>
                    {items.naver_api_business_name}
                </div>
                <div>
                    {items.naver_api_business_number}
                </div>
                <div>
                    {items.naver_api_customer_id}
                </div>
                <div>
                    {items.naver_api_access_license}
                </div>
                <div>
                    {items.naver_api_secret_key}
                </div>
                <div>
                    <button onClick={() => { setShowModal(true) }}>수정</button>
                </div>
                <div>
                    <button onClick={OnDelete}>삭제</button>
                </div>
            </li>
            {showModal &&
                <div className={style.client__update_modal}>
                    <div className={style.client__update_modal_form}>
                        <div>
                            <h4>
                                상호명
                            </h4>
                            <div>
                                <input
                                    value={businessName}
                                    type="text"
                                    name="businessName"
                                    id=""
                                    onChange={OnChange}
                                />
                            </div>
                        </div>
                        <div>
                            <h4>
                                사업자 번호
                            </h4>
                            <div>
                                <input
                                    value={businessNumber}
                                    type="text"
                                    name="businessNumber"
                                    id=""
                                    onChange={OnChange}
                                />
                            </div>
                        </div>
                        <div>
                            <h4>
                                커스토머 아이디
                            </h4>
                            <div>
                                <input
                                    value={customerId}
                                    type="text"
                                    name="customerId"
                                    id=""
                                    onChange={OnChange}
                                />
                            </div>
                        </div>
                        <div>
                            <h4>
                                엑세스라이선스
                            </h4>
                            <div>
                                <input
                                    value={accessLicense}
                                    type="text"
                                    name="accessLicense"
                                    id=""
                                    onChange={OnChange}
                                />
                            </div>
                        </div>
                        <div>
                            <h4>
                                비밀키
                            </h4>
                            <div>
                                <input value={secretKey}
                                    type="text"
                                    name="secretKey"
                                    id=""
                                    onChange={OnChange}
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={OnSubmit}
                            >
                                수정
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => { setShowModal(false) }}
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default NaverApiList;