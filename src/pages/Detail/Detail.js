import React, { useEffect, useState } from 'react';
import './Detail.scss';

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
  const keys = Object.keys(DETAIL_DATA); // 목데이터용 코드입니다 삭제 필수!

  // const [itemInfo, setItemInfo] = useState({});

  // useEffect(() => {
  //   fetch('./../../../public/data/DETAIL_DATA.json')
  //     .then(res => res.json())
  //     .then(result => console.log(result));
  // });
  return (
    <div className="detailPage">
      <div className="detailPageContainer">
        <article className="detailArticle">
          <div className="itemImage"></div>
          <div className="itemDescription">
            <div className="nameOfItem">
              <div className="ship">샛별배송</div>
              <div>
                <div className="titleContainer">
                  <h2 className="itemName">
                    [{contactant}] {name}
                  </h2>
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
              <dl>
                <dt>배송</dt>
                <dd>
                  <p>샛별배송</p>
                  <p>{`23시 전 주문 시 내일 아침 7시 전 도착
(대구·부산·울산 샛별배송 운영시간 별도 확인)`}</p>
                </dd>
              </dl>
              <TableInner />
              <TableInner />
              <TableInner />
              <TableInner />
              <TableInner />
            </div>
            <div className="select"></div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Detail;

const Description = () => {
  return (
    <p>
      <strong></strong>
      <b>중량</b>
      : 1개(6.7g)
      <br />
      <b>특징</b>: 데일리한 베이지, 브라운에 톤 다운된 핑크, 로즈컬러를
      담았어요.
      <br />
      <b>특징</b>: 데일리한 베이지, 브라운에 톤 다운된 핑크, 로즈컬러를
      담았어요.
    </p>
  );
};

const TableInner = props => {
  const { key, value } = props;
  return (
    <dl>
      <dt>{key}</dt>
      <dd>{value}</dd>
    </dl>
  );
};

const DETAIL_DATA = {
  id: 1,
  backgroundImage:
    'https://img-cf.kurly.com/shop/data/goods/1569990684227l0.jpg',
  contactant: '퀴네',
  name: '아메리칸 시저 드레싱',
  weight: '1병(250mL)',
  packing_type_text: '상온(종이포장)',
  origin: '상세페이지 별도표기',
  expiration_date: '뚜껑 별도 표기일까지(읽는법: EXP)',
  price: 10900,
  allerge: '-계란, 우유, 대두, 밀, 돼지고기, 쇠고기 함유',
};
