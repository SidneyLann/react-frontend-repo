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

const CommodityListByCategory0 = lazy(() => import('jsx/commodity/CommodityListByCategory'));
const CommodityListByCategory = () => (
    <UiLoad uiShow={appLoading}>
        <CommodityListByCategory0 />
    </UiLoad>
);

const CommodityShowList0 = lazy(() => import('jsx/commodity/CommodityShowList'));
const CommodityShowList = () => (
    <UiLoad uiShow={appLoading}>
        <CommodityShowList0 />
    </UiLoad>
);

const CommodityDetail0 = lazy(() => import('jsx/commodity/CommodityDetail'));
const CommodityDetail = () => (
    <UiLoad uiShow={appLoading}>
        <CommodityDetail0 />
    </UiLoad>
);


const ShopHome0 = lazy(() => import('jsx/mall/ShopHome'));
const ShopHome = () => (
    <UiLoad uiShow={appLoading}>
        <ShopHome0 />
    </UiLoad>
);

const CommodityListByKeyword0 = lazy(() => import('jsx/commodity/CommodityListByKeyword'));
const CommodityListByKeyword = () => (
    <UiLoad uiShow={appLoading}>
        <CommodityListByKeyword0 />
    </UiLoad>
);

const ShopListPage0 = lazy(() => import('jsx/mall/ShopListByKeyword'));
const ShopListPage = () => (
    <UiLoad uiShow={appLoading}>
        <ShopListPage0 />
    </UiLoad>
);

//import Payment from 'jsx/payment/Payment';
const Payment0 = lazy(() => import('jsx/payment/Payment'));
const Payment = () => (
    <UiLoad uiShow={appLoading}>
        <Payment0 />
    </UiLoad>
);

const ShoppingCart0 = lazy(() => import('jsx/mall/ShoppingCart'));
const ShoppingCart = () => (
    <UiLoad uiShow={appLoading}>
        <ShoppingCart0 />
    </UiLoad>
);

const Order0 = lazy(() => import('jsx/order/OrderPlace'));
const OrderPlace = () => (
    <UiLoad uiShow={appLoading}>
        <Order0 />
    </UiLoad>
);

const Chat0 = lazy(() => import('jsx/mall/Chatting'));
const Chat = () => (
    <UiLoad uiShow={appLoading}>
        <Chat0 />
    </UiLoad>
);

const Supplier0 = lazy(() => import('jsx/join/Supplier'));
const Supplier = () => (
    <UiLoad uiShow={appLoading}>
        <Supplier0 />
    </UiLoad>
);

const About0 = lazy(() => import('jsx/join/About'));
const About = () => (
    <UiLoad uiShow={appLoading}>
        <About0 />
    </UiLoad>
);

const OpCenter0 = lazy(() => import('jsx/join/OpCenter'));
const OpCenter = () => (
    <UiLoad uiShow={appLoading}>
        <OpCenter0 />
    </UiLoad>
);

const Community0 = lazy(() => import('jsx/join/ServiceStation'));
const Community = () => (
    <UiLoad uiShow={appLoading}>
        <Community0 />
    </UiLoad>
);
const Contact0 = lazy(() => import('jsx/join/Contact'));
const Contact = () => (
    <UiLoad uiShow={appLoading}>
        <Contact0 />
    </UiLoad>
);

const Help0 = lazy(() => import('jsx/join/Help'));
const Help = () => (
    <UiLoad uiShow={appLoading}>
        <Help0 />
    </UiLoad>
);

const PaySuccess0 = lazy(() => import('jsx/payment/PaySuccess'));
const PaySuccess = () => (
    <UiLoad uiShow={appLoading}>
        <PaySuccess0 />
    </UiLoad>
);

	const IdeaSource0 = lazy(() => import('jsx/idea/IdeaSource'));
	const IdeaSource = () => (
	    <UiLoad uiShow={appLoading}>
	        <IdeaSource0 />
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
            <Route path="/fe/page/CommodityListByCategory" element={<CommodityListByCategory />} />
            <Route path="/fe/page/CommodityShowList" element={<CommodityShowList />} />
            <Route path="/fe/page/search_commodity_by_keyword" element={<CommodityListByKeyword />} />
            <Route path="/fe/page/shop_list" element={<ShopListPage />} />
            <Route path="/fe/page/commodityDetail/:commodityId" element={<CommodityDetail />} />
            <Route path="/fe/page/shop_home/:supplierId" element={<ShopHome />} />
            <Route path="/fe/page/pay" element={<Payment />} />
            <Route path="/fe/page/shopping_cart" element={<ShoppingCart />} />
            <Route path="/fe/page/order_place" element={<OrderPlace />} />
            <Route path="/fe/page/chat" element={<Chat />} />
            <Route path="/fe/page/join/supplier" element={<Supplier />} />
            <Route path="/fe/page/join/opCenter" element={<OpCenter />} />
            <Route path="/fe/page/join/serviceStation" element={<Community />} />
            <Route path="/fe/page/about" element={<About />} />
            <Route path="/fe/page/help" element={<Help />} />
            <Route path="/fe/page/contact" element={<Contact />} />
            <Route path="/fe/page/paySuccess" element={<PaySuccess />} />
			<Route path="/fe/page/idea_source" element={<IdeaSource />} />
        </Routes>
      </Router>

);
export default Main;
