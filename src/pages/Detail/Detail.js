import React, { useEffect, useState } from 'react';
import './Detail.scss';
import DetailNavigator from './Detailnavigator/DetailNavigator';
// 35, 43, 87, 116-135

const Detail = () => {
  const [itemInfo, setItemInfo] = useState({});

  const {
    allerge,
    detail_image_url,
    contactant,
    expiration_date,
    name,
    origin,
    packing_type_text,
    price,
    weight,
    short_description,
    packing_type_id,
    packing_types,
  } = DETAIL_DATA;

  const DETAIL_KEY_KOREAN = {
    contactant: '판매자',
    packing_types: '포장타입',
    packing_type_id: '판매단위',
    weight: '중량/용량',
    origin: '원산지',
    allerge: '알레르기정보',
    expiration_date: '유통기한(또는 소비기한)정보',
  };
  const keys = Object.keys(DETAIL_KEY_KOREAN);

  useEffect(() => {
    fetch('http://url:3000/products/${productId}', {
      //api 주소 맞추기
      method: 'GET',
      headers: { key: 'value' },
    })
      .then(res => res.json())
      .then(result => setItemInfo(result));
  });
  console.log(itemInfo); //서버와 통신 시 확인 위함

  // const showShareWindow = ()=>();

  function priceComma(price) {
    const reversedPrice = (price + '').split('').reverse();
    let arr = [];
    for (let i = 0; i < reversedPrice.length; i++) {
      arr.push(Number(reversedPrice[i]));
      if (i === 2 || i === 5 || i === 8) {
        arr.push(`,`);
      }
    }
    return arr.reverse().join('');
  }

  return (
    <div className="detailPage">
      <div className="detailPageContainer">
        <article className="detailArticle">
          <div className="itemImage">
            <img src={detail_image_url} alt={name} className="itemImageTag" />
          </div>
          <div className="itemDescription">
            <div className="nameOfItem">
              <div className="ship">샛별배송</div>
              <div>
                <div className="titleContainer">
                  <h2 className="itemName">{name}</h2>
                  <button className="share"></button>
                </div>
                <p className="brief">{short_description}</p>
              </div>
            </div>

            <div className="priceContainer">
              <span className="price">{priceComma(price)}</span>
              <span className="won">원</span>
            </div>
            <div className="table">
              <dl className="dList">
                <dt className="dTitle">배송</dt>
                <dd className="dDescription">
                  <p>샛별배송</p>
                  <p>
                    23시 전 주문 시 내일 아침 7시 전 도착
                    <br /> (대구·부산·울산 샛별배송 운영시간 별도 확인)
                  </p>
                </dd>
              </dl>

              {keys.map((key, index) => {
                return (
                  <TableInner
                    key={index}
                    name={key}
                    data={DETAIL_DATA} //itemInfo로 변수명 변경!
                    korean={DETAIL_KEY_KOREAN}
                  />
                );
              })}
            </div>
            <div className="select"></div>
          </div>
        </article>
        <DetailNavigator />
      </div>
    </div>
  );
};

export default Detail;

const TableInner = props => {
  const { name, data, korean } = props;
  return (
    <dl className="dList">
      <dt className="dTitle">{korean[name]}</dt>
      <dd className="dDescription">{data[name]}</dd>
    </dl>
  );
};

//서버와 통신 전 사용하는 Mockdata 입니다.

const DETAIL_DATA = {
  id: 1,
  sub_category_id: 2,
  name: '[KF365] 밤고구마 800g',
  thumnail_image_url:
    'https://pixabay.com/get/g00e4af9aa464d5be8b52b11a34cfd3705596eb00ae6fcc74618239c7b4dfa2e4f5c568ade6c3dc5eec4871edf803545089561841af9fe44d6d9e9367126a0fe8066e329cfa3f2361ca945faa8fe13f60_640.jpg',
  short_description: '포근하고 고소한 고구마(1봉/800g)',
  contactant: '컬리',
  packing_type_id: 1,
  weight: '800g',
  origin: '국내산',
  allerge: '-없음',
  expiration_date:
    '농산물로 별도의 유통기한은 없으나 가급적 빨리 드시기 바랍니다.',
  price: '1113900',
  detail_image_url:
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
  created_at: '2022-10-20T00:23:09.000Z',
  updated_at: '2022-10-20T00:23:09.000Z',
  packing_types: '냉장',
};
