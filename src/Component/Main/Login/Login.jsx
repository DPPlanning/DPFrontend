import React from 'react';
import { Member } from '../../../Context/Member';
import style from './Login.module.css'

const Login = () => {
    // form submit 이벤트
    const OnSubmit = (e) => {
        e.preventDefault();
        // 로그인 처리
        // id localStorage 생성
        
        // 아이디 가져오기
        const id = e.target.exampleInputEmail1.value;
        const pass = e.target.exampleInputPassword1.value;
        // id pass 값이 없으면 return
        if (!id ) {
            return window.alert("이메일을 입력해 주세요");
        }
        if (!pass) {
            return window.alert("패스워드를 입력해 주세요");
        }
        const members = Member;
        let res = false;
        members.map((member) =>{
            console.log(typeof(id), typeof(member.id ), typeof(pass), typeof(member.pw));
            if(id === member.id && pass === member.pw){
                localStorage.setItem('idx', member.idx);
               res = true;
             
            }
        })
        if(res){
            window.location.href = '/';
        }else{
            window.alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    }

    return (
        <section className={style.login_section}>
            {/* 부트스트랩을 이용한 로그인 타이틀 */}
            <div className={style.login_title}>
                <div className="row">
                    <div className="col-12">
                        <img src="http://www.dpplanning.co.kr/RAD/PEG/logo_16275215309465.png" alt="로고" />
                        <h1 className="text-center">Login</h1>
                    </div>
                </div>
            </div>
            {/* 로그인 폼 */}
            <div  className={style.login_input_box}>
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={OnSubmit}>
                            <div  className={style.login_input_email}>
                                <div>
                                    <label for="exampleInputEmail1"><h5>이메일 주소</h5> </label>
                                </div>
                                <div>
                                    <input 
                                        type="email" 
                                        className={style.login_input_input}
                                        id="exampleInputEmail1" 
                                        aria-describedby="emailHelp" 
                                        placeholder="이메일을 입력해주세요." />
                                </div>
                            </div>
                            <div className={style.login_input_password}>
                                <div>
                                    <label for="exampleInputPassword1"><h5>비밀번호</h5> </label>
                                </div>
                                <div>
                                    <input 
                                        type="password" 
                                        className={style.login_input_input}
                                        id="exampleInputPassword1" 
                                        placeholder="비밀번호를 입력해주세요." />
                                </div>
                            </div>
                        
                            <button type="submit"  className={style.login_input_button }>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;