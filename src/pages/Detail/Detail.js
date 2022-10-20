import React, { useEffect, useState } from 'react';
import './Detail.scss';
import DetailNavigator from './Detailnavigator/DetailNavigator';

const Detail = () => {
  const {
    allerge,
    backgroundImage,
    contactant,
    expiration_date,
    name,
    origin,
    packing_type_text,
    price,
    weight,
  } = DETAIL_DATA;
  const DETAIL_KEY_KOREAN = {
    packing_type_text: '배송',
    origin: '원산지',
    allerge: '알레르기정보',
    contactant: '판매자',
    weight: '중량/용량',
  };
  const keys = Object.keys(DETAIL_KEY_KOREAN);

  // console.log(keys); // 목데이터용 코드입니다 삭제 필수!
  // console.log(window.pageYOffset);
  // const [itemInfo, setItemInfo] = useState({});

  // useEffect(() => {
  //   fetch('./../../../public/data/DETAIL_DATA.json')
  //     .then(res => res.json())
  //     .then(result => console.log(result));
  // });

  // const showShareWindow = ()=>();

  return (
    <div className="detailPage">
      <div className="detailPageContainer">
        <article className="detailArticle">
          <div className="itemImage">
            <img src={backgroundImage} alt={name} className="itemImageTag" />
          </div>
          <div className="itemDescription">
            <div className="nameOfItem">
              <div className="ship">샛별배송</div>
              <div>
                <div className="titleContainer">
                  <h2 className="itemName">[퀴네] {name}</h2>
                  <button className="share"></button>
                </div>
                <p className="brief">치즈와 마늘 품은 드레싱의 여왕</p>
              </div>
            </div>

            <div className="priceContainer">
              <span className="price">{price}</span>
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
                    data={DETAIL_DATA}
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

const DETAIL_DATA = {
  id: 1,
  backgroundImage:
    'https://img-cf.kurly.com/shop/data/goods/1569990684227l0.jpg',
  contactant: '컬리',
  name: '아메리칸 시저 드레싱',
  weight: '1병(250mL)',
  packing_type_text: '상온(종이포장)',
  origin: '상세페이지 별도표기',
  expiration_date: '뚜껑 별도 표기일까지(읽는법: EXP)',
  price: 10900,
  allerge: '-계란, 우유, 대두, 밀, 돼지고기, 쇠고기 함유',
};
