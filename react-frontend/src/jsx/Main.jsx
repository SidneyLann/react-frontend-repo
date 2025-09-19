import React, { lazy } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import UiLoad from 'jsx/common/UiLoad';
//import appLoading from 'jsx/control/grid/appLoading';
import PcngLoadable from 'jsx/common/PcngLoadable';
// import MuiThemeProvider from '@mui/material/styles/MuiThemeProvider';
// import theme from '../config/pcngou.theme';
//const Home = PcngLoadable(()=>import('jsx/common/Home'));

const appLoading = <div align='center'>Loading...</div>;

//import Home from 'jsx/common/Home';
const Home0 = lazy(() => import('jsx/common/Home'));
const Home = () => (
    <UiLoad uiShow={appLoading}>
        <Home0 />
    </UiLoad>
);

const Register0 = lazy(() => import('jsx/member/Register'));
const Register = () => (
    <UiLoad uiShow={appLoading}>
        <Register0 />
    </UiLoad>
);

const UserContract0 = lazy(() => import('jsx/member/UserContract'));
const UserContract = () => (
    <UiLoad uiShow={appLoading}>
        <UserContract0 />
    </UiLoad>
);

const Login0 = lazy(() => import('jsx/member/Login'));
const Login = () => (
    <UiLoad uiShow={appLoading}>
        <Login0 />
    </UiLoad>
);

const MessageLogin0 = lazy(() => import('jsx/member/MessageLogin'));
const MessageLogin = () => (
    <UiLoad uiShow={appLoading}>
        <MessageLogin0 />
    </UiLoad>
);

const FindPassword0 = lazy(() => import('jsx/member/FindPassword'));
const FindPassword = () => (
    <UiLoad uiShow={appLoading}>
        <FindPassword0 />
    </UiLoad>
);

const Main = () => (

      <Router>
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/fe/page/register" element={<Register />} />
            <Route path="/fe/page/userContract" element={<UserContract />} />
            <Route path="/fe/page/login" element={<Login />} />
            <Route path="/fe/page/findPassword" element={<FindPassword />} />
            <Route path="/fe/page/MessageLogin" element={<MessageLogin />} />
        </Routes>
      </Router>

);
export default Main;
