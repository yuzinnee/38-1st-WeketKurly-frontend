import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import Detail from './pages/Detail/Detail';
import Mypage from './pages/Mypage/Mypage';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import List from './pages/List/List';
import './styles/common.scss';
import './styles/reset.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/list/:maincategoriesId" element={<List />}></Route>
        <Route path="/list" element={<List />}>
          <Route index element={<List />} />
          <Route path="/list/sub/:subcategoriesId" element={<List />} />
        </Route>
        <Route path="/products/detail/:product_id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
