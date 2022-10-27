import React from 'react';
import './ProductDetail.scss';

const ProductDetail = ({
  detail_image_url,
  product_name,
  short_description,
}) => {
  // console.log(props.detail_image_url);
  return (
    <div className="productDetailsContainer">
      <img
        src={detail_image_url}
        alt={product_name}
        className="itemImageDetail"
      />
      <div>
        <h3 className="shortDescription">{short_description}</h3>
        <h1 className="nameOnDescription">{product_name}</h1>
      </div>
    </div>
  );
};

export default ProductDetail;
