import React from 'react';
import './OrderBox.scss';
const OrderBox = ({ totalPrice, deliveryFee, totalAndFee }) => {
  return (
    <div className="orderBox">
      <div className="orderPriceBox">
        <div className="orderItemPrice">
          <p className="orderText">상품금액</p>
          <p className="orderText">
            <span className="orderPriceText">{totalPrice}</span>원
          </p>
        </div>
        <div className="orderItemDiscount">
          <p className="orderText">상품할인금액</p>
          <p className="orderText">
            <span className="orderPriceText">-3000</span>원
          </p>
        </div>
        <div className="orderDeliveryFee">
          <p className="orderText">배송비</p>
          <p className="orderText">
            <span className="orderPriceText">{deliveryFee}</span>원
          </p>
        </div>
        <div className="orderTotalPrice">
          <p className="orderText">결제예정금액</p>
          <p className="orderText">
            <span className="orderTotalPriceText">{totalAndFee}</span>원
          </p>
        </div>
      </div>
      <button className="orderBtn">주문하기</button>
    </div>
  );
};

export default OrderBox;
