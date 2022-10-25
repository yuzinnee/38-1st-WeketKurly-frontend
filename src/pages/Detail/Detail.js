import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import DetailNav from './DetailNav/DetailNav';
import ProductDetail from './ProductDetail/ProductDetail';
import Review from './Review/Review';
import Article from './Article/Article';
import API from '../../../src/config';
import './Detail.scss';

const Detail = () => {
  const [itemInfo, setItemInfo] = useState({
    product_id: '',
    contactant: '',
    packing_types: '',
    packing_type_id: '',
    weight: '',
    origin: '',
    allerge: '',
    expiration_date: '',
    price: '',
    review: [],
  });

  const { product_id } = useParams();

  const { allerge, contactant, expiration_date, name, origin, ...others } =
    itemInfo;

  useEffect(() => {
    fetch(`${API.detailItem}/${product_id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setItemInfo(result.productData[0]);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="detailPage">
        <div className="detailPageContainer">
          <Article itemInfo={itemInfo} />
          <DetailNav />
          <ProductDetail itemInfo={itemInfo} />
          <Review reviewData={itemInfo.review} product_id={others.product_id} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
