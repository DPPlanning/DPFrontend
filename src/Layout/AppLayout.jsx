import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';
import SideBar from '../Component/SideBar/SideBar';
import {useRecoilState} from 'recoil'
import { SideBarOnOff } from '../Component/recoil/SideBar';

const AppLayout = () => {
  const [sideBarOnOff, setSideBarOnOff] = useRecoilState(SideBarOnOff);
  // 토큰에 ID가 없으면 로그인 페이지로 이동
   //const location = useLocation();
   const url = new URL(window.location.href); ;
  
   // useLayoutEffect(() =>{
   // });
   if (!localStorage.getItem('idx') && url.pathname !== '/login') {
     window.location.href = '/login';
     return;
   }else if(localStorage.getItem('idx') && url.pathname === '/login'){
     window.location.href = '/';
     return;
   }
   
 
   return (
     <>
       {
         <div className={"admin"}>
           <main className={"admin__main"}>
             <Header />
             <section className="main__section" >
               <SideBar />
               <Outlet />
             </section>
             <Footer />
           </main>
         </div>
       }
     </>
   )
};

export default AppLayout;