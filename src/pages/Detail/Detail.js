import React, { useEffect, useState } from 'react';
import { HiOutlineShare, HiOutlineBell, HiOutlineHeart } from 'react-icons/hi';
import './Detail.scss';
import DetailNav from './DetailNav/DetailNav';
import TableInner from './TableInner/TableInner';
import DetailCart from './DetailCart/DetailCart';
import ShareToolTip from './ShareToolTip/ShareToolTip';
import Review from './Review/Review';
import Nav from '../../components/Nav/Nav';

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
  const [isShareTooTipClicked, setisShareTooTipClicked] = useState(false);

  const { allerge, contactant, expiration_date, name, origin, ...others } =
    itemInfo;

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

  const clickShareToolTip = event => {
    setisShareTooTipClicked(isShareTooTipClicked ? false : true);
  };

  useEffect(() => {
    // fetch('/data/DETAIL_DATA.json', {
    fetch(`http://10.58.52.148:3000/products/16`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        // setItemInfo(result[0]);
        setItemInfo(result.productData[0]);
      });
  }, []);

  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <>
      <Nav />
      <div className="detailPage">
        <div className="detailPageContainer">
          <article className="detailArticle">
            <div className="itemImage">
              <img
                src={others.thumnail_image_url}
                alt={name}
                className="itemImageTag"
              />
            </div>
            <div className="itemDescription">
              <div className="nameOfItem">
                <div className="ship">샛별배송</div>
                <div>
                  <div className="titleContainer">
                    <h2 className="itemName">{name}</h2>

                    <button className="share" onClick={clickShareToolTip}>
                      <HiOutlineShare className="shareicon" />
                      {isShareTooTipClicked && (
                        <ShareToolTip url="http://url" />
                      )}
                    </button>
                  </div>
                  <p className="brief">{others.short_description}</p>
                </div>
              </div>

              <div className="priceContainer">
                <span className="price">{priceToString(others.price)}</span>
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
                      data={itemInfo}
                      korean={DETAIL_KEY_KOREAN}
                    />
                  );
                })}
                <dl className="dList">
                  <div className="cartList">
                    <dt className="dTitle">상품선택</dt>
                    <div className="buttonContainer">
                      <button className="cartButtons heart">
                        <HiOutlineHeart className="icon" />
                      </button>
                      <button className="cartButtons bell">
                        <HiOutlineBell className="icon" />
                      </button>
                    </div>
                  </div>

                  <dd className="dDescription">
                    <DetailCart
                      priceToString={priceToString}
                      contents={itemInfo}
                    />
                  </dd>
                </dl>
              </div>
              <div className="select"></div>
            </div>
          </article>
          <DetailNav />
          <div className="productDetailsContainer">
            <img
              src={itemInfo.detail_image_url}
              alt={name}
              className="itemImageDetail"
            />
            <div>
              <h3 className="shortDescription">{others.short_description}</h3>
              <h1 className="nameOnDescription">{name}</h1>
            </div>
          </div>
          <div>
            <Review
              reviewData={itemInfo.review}
              product_id={others.product_id}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
