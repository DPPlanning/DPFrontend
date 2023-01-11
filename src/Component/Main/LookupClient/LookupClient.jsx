import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { baseUrl } from '../../../http/http';
import LookupForm from '../Lookup/component/LookupForm';
import style from './LookupClient.module.css';
const LookupClient = () => {
    const location = useLocation();
    const [businessNumber, setBusinessNumber] = useState(new URL(window.location).searchParams.get("number"))
    const [businessName, setBusinessName] = useState(new URL(window.location).searchParams.get("name"))
    const [clients, setClients] = useState([])
    useEffect(() => {
        const accessToken = localStorage.getItem('idx');
  
        axios({
            url: `${baseUrl}/client?number=${businessNumber}&name=${businessName}`,
            method: 'GET',
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${accessToken}`
            },
        })
            .then((res) => {
                console.log(res.data);
                if(res.data.length !== 0){
                    setClients(res.data);
                }else{
                    const link = `https://bizno.net/api/fapi?key=ampzazEwOUBnbWFpbC5jb20g&gb=${businessNumber ? 1 : 3}&q=${businessNumber ? businessNumber.replace('-',''): businessName }&type=xml`;
                    window.open(link ,"", "_blank");
                }
                
            }).catch((err) => { console.log(err); })
        setBusinessNumber(new URL(window.location).searchParams.get("number"))
        setBusinessName(new URL(window.location).searchParams.get("name"))
    }, [businessName, businessNumber, location])

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
                {clients.length !== 0 ?
                    <>
                        {clients.map((item, index) => {
                            return (
                                <li className={`${style.look_up__list} ${style.look_up__list_content}`}>
                                    <div>
                                        {item.client_business_name}
                                    </div>
                                    <div>
                                        {item.client_business_number}
                                    </div>
                                    <div>
                                        {item.employee_name}
                                    </div>
                                    <div>
                                        {item.team_name}
                                    </div>
                                    <div>
                                        영업 불가
                                    </div>
                                </li>
                            )
                        })}
                    </>
                    :
                    <li className={`${style.look_up__list} ${style.look_up__list_no_data}`}>
                         {businessNumber ? `조회 번호 : ${businessNumber}` : `조회 업체명 : ${businessName}`}
                        영업 가능
                    </li>
                }


            </ul>
        </div>
    );
};

export default LookupClient;