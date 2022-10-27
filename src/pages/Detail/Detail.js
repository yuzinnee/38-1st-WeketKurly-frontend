import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import DetailNav from './DetailNav/DetailNav';
import ProductDetail from './ProductDetail/ProductDetail';
import Review from './Review/Review';
import Article from './Article/Article';
import API from '../../../src/config';
import './Detail.scss';

const Detail = () => {
  const [itemInfo, setItemInfo] = useState({
    product_name: '',
    product_id: '',
    contactant: '',
    packing_types: '',
    thumbnail_image_url: '',
    detail_image_url: '',
    short_description: '',
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

  const scrollToReview = () => {
    window.scroll({
      bottom: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    fetch(`${API.detailItem}/${product_id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setItemInfo(result.productData[0]);
      });
  }, []);
  // console.log(others.review);

  return (
    <>
      <Nav />
      <div className="detailPage">
        <div className="detailPageContainer">
          <Article itemInfo={itemInfo} />
          <DetailNav onClick={scrollToReview} />
          <div className="productDetailsContainer">
            <img
              src={itemInfo.detail_image_url}
              alt={itemInfo.product_name}
              className="itemImageDetail"
            />
            <div>
              <h3 className="shortDescription">{itemInfo.short_description}</h3>
              <h1 className="nameOnDescription">{itemInfo.product_name}</h1>
            </div>
          </div>
          <Review reviewData={others.review} product_id={others.product_id} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
