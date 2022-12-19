import React from 'react';
import { Link } from 'react-router-dom';
//  부트스프램 임포트
import { getMember } from '../../Context/Member';
import style from './Header.module.css';
const Header = () => {
    // 토큰이 없으면 로그인 페이지로 이동
    const member = getMember(localStorage.getItem('idx'));
    return (
        <section>
            <nav className={`${style.header__nav}`}>
                <Link className="navbar-brand" to="/"><img src="http://www.dpplanning.co.kr/RAD/PEG/logo_16275215309465.png" alt="로고" /></Link>

                <div className={` ${style.header__nav_member_info}`}>
                    {/* logout */}
                    {member && 
                        <div>
                            {member.name}
                        </div>
            
                    }
                    <div>로그아웃</div>
                </div>
            </nav>
        </section>
    );
};

export default Header;