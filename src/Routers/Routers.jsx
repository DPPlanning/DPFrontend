import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Component/Main/Login/Login';
import Main from '../Component/Main/Main';
import NaverAd from '../Component/Main/Stat/NaverAd/NaverAd';
import Stat from '../Component/Main/Stat/Stat';
import FacebookAd from '../Component/Main/Stat/FacebookAd/FacebookAd';
import GoogleAd from '../Component/Main/Stat/GoogleAd/GoogleAd';
import AllAd from '../Component/Main/Stat/AllAd/AllAd';
import Client from '../Component/Main/Client/Client';
import Api from '../Component/Main/API/Api';
import NaverAPI from '../Component/Main/API/NaverAPI/NaverAPI';
import FacebookAPI from '../Component/Main/API/FacebookAPI/FacebookAPI';
import Lookup from '../Component/Main/Lookup/Lookup';
import AppLayout from '../Layout/AppLayout';
import LookupClient from '../Component/Main/LookupClient/LookupClient';
const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Main />} />
          <Route path='/stat' element={<Stat />} />
          <Route path='/stat/naver' element={<NaverAd />} />
          <Route path='/stat/facebook' element={<FacebookAd />} />
          <Route path='/stat/google' element={<GoogleAd />} />
          <Route path='/stat/all' element={<AllAd />} />
          <Route path='/API' element={<Api />} />
          <Route path='/API/naver' element={<NaverAPI />} />
          <Route path='/API/facebook' element={<FacebookAPI />} />
          <Route path='/API/google' element={<FacebookAPI />} />
          <Route path='/client' element={<Client />} />
          <Route path='/lookup' element={<Lookup />} />
          <Route path='/lookup/client' element={<LookupClient />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;