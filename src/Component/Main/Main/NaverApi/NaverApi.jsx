import axios from 'axios';
import React from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { baseUrl } from '../../../../http/http';
import NaverApiList from '../List/NaverApiList';

const NaverApi = ({ style }) => {
    const [naverApi, setNaverApi] = useState([]);

    useLayoutEffect(() => {
        const accessToken = localStorage.getItem('idx');
        axios({
            url: `${baseUrl}/api/naver`,
            method: "GET",
            headers: {
                "Content-Type": `application/json`,
                "Authorization": `Bearer ${accessToken}`
            },

        }).then((result) => {
            console.log(result);
            if (result.status === 200) {
                setNaverApi(result.data);
            } else {
                window.alert();
            }
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <section>
            <h3>Naver API</h3>
            <ul>
                <li className={style.naver__api_list_title} key={-1}>
                    <div>
                        상호명
                    </div>
                    <div>
                        사업자 번호
                    </div>
                    <div>
                        커스토머 아이디
                    </div>
                    <div>
                        엑세스라이선스
                    </div>
                    <div>
                        비밀키
                    </div>
                    <div>
                        수정
                    </div>
                    <div>
                        삭제
                    </div>
                </li>
                { naverApi.map((items, index)=>{
                    return(
                        <NaverApiList style={style} items={items} index={index}   />
                    )
                })}
            </ul>
        </section>
    );
};

export default NaverApi;