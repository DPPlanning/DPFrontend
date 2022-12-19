import React from 'react';
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LookupForm from '../Lookup/component/LookupForm';
import style from './LookupClient.module.css';

const LookupClient = () => {
    const location = useLocation();
    const [businessNumber,setBusinessNumber] = useState(new URL(window.location).searchParams.get("n"))
    
    useLayoutEffect(()=>{

        // axios({
        //     method:'get',
        //     url : 'https://bizno.net/api/fapi?key=ampzazEwOUBnbWFpbC5jb20g&gb=1&q=3988701&type=json',
        //     responseType:'stream'
        // })
        // .then((res)=>{
        //     console.log(res);
        // }).catch((err)=>{console.log(err);})
        setBusinessNumber(new URL(window.location).searchParams.get("n"))
    },[location])
 
    return (
        <div className={style.look_up__client__section}>
            <h3>영업 조회</h3>
            <div className={style.look_up__client__section_form}>
                <LookupForm style={style} />
            </div>
            <ul>
                <li className={`${style.look_up__list} ${style.look_up__list_title}`}>
                    <div>
                        상호명
                    </div>
                    <div>
                        사업자 번호
                    </div>
                    <div>
                        디피 담당자 이름
                    </div>
                    <div>
                        관리 부서
                    </div>
                    <div>
                        영업가능 유무
                    </div>
                </li>
                <li  className={`${style.look_up__list} ${style.look_up__list_content}`}>
                    <div>
                        (주)우리금융지주
                    </div>
                    <div>
                        398-87-01116
                    </div>
                    <div>
                        김영진
                    </div>
                    <div>
                        디지털 마케팅
                    </div>
                    <div>
                       영업 불가
                    </div>
                </li>
                <li  className={`${style.look_up__list} ${style.look_up__list_no_data}`}>
                    조회 번호 : {businessNumber}
                    영업 가능
                </li>
            </ul>
        </div>
    );
};

export default LookupClient;