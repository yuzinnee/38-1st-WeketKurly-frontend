import React, { useEffect, useState } from 'react';
import { HiOutlineShare, HiOutlineBell, HiOutlineHeart } from 'react-icons/hi';
import ShareToolTip from '../ShareToolTip/ShareToolTip';
import TableInner from '../TableInner/TableInner';
import DetailCart from './DetailCart/DetailCart';
import './Article.scss';

const Article = ({ itemInfo }) => {
  const token = localStorage.getItem('token');
  const { thumnail_image_url, name, short_description, price, product_id } =
    itemInfo;
  const [isShareTooTipClicked, setisShareTooTipClicked] = useState(false);
  const [wishList, setWishList] = useState(????) //배열로 보내주시나요? 객체로 보내주시나요?? 초기값
  const [isWishItemToggled, setIsWishItemToggled] = useState(false);

  const clickShareToolTip = () => {
    setisShareTooTipClicked(isShareTooTipClicked ? false : true);
  };

  const priceToString = price => {
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  
  const wishListCompare = (wishList) => {
    for(let i = 0; i<wishList.length; i++) {
      return wishList[i].product_id === product_id 
    }
  }

  const fetchWishItem = () => {
    fetch('', {
      Authorization: token,
      product_id: product_id,
    })
      .then()
      .then();
  };

  const fetchWishList = () => {
    fetch('', {
      Authorization: token,
    })
      .then(res => res.json())
      .then(result => setWishList(result.data));
      setIsWishItemToggled(wishListCompare(wishList));

  };

  useEffect(token => {
    token ? fetchWishList() : setIsWishItemToggled(false);
  }, []); //

  //토큰값을 가지고 있으면, 위시리스트를 패칭하고 비교해서 맞으면 하트를 눌러놓기
  //그렇지 않으면 그냥 하트 버튼 자체에서 모달만 띄우도록 하기

  return (
    <article className="detailArticle">
      <div className="itemImage">
        <img src={thumnail_image_url} alt={name} className="itemImageTag" />
      </div>
      <div className="itemDescription">
        <div className="nameOfItem">
          <div className="ship">샛별배송</div>
          <div>
            <div className="titleContainer">
              <h2 className="itemName">{name}</h2>

              <button className="share" onClick={clickShareToolTip}>
                <HiOutlineShare className="shareicon" />
                {isShareTooTipClicked && <ShareToolTip url="http://url" />}
              </button>
            </div>
            <p className="brief">{short_description}</p>
          </div>
        </div>

        <div className="priceContainer">
          <span className="price">{priceToString(price)}</span>
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

          {detailKeyKorean.map((key, index) => {
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
                {/* {
                  token && (
                    <button className="cartButtons heart" onClick={clickWish}>
                      <HiOutlineHeart className="icon" />
                    </button>
                  )
                  // : (
                  // <button className="cartButtons heart" onClick={모달 띄우기}>
                  //   <HiOutlineHeart className="icon" />
                  // </button>
                  // )
                } */}

                <button className="cartButtons bell">
                  <HiOutlineBell className="icon" />
                </button>
              </div>
            </div>
            <dd className="dDescription">
              <DetailCart priceToString={priceToString} contents={itemInfo} />
            </dd>
          </dl>
        </div>
        <div className="select"></div>
      </div>
    </article>
  );
};

export default Article;

const DETAIL_KEY_KOREAN = {
  contactant: '판매자',
  packing_types: '포장타입',
  packing_type_id: '판매단위',
  weight: '중량/용량',
  origin: '원산지',
  allerge: '알레르기정보',
  expiration_date: '유통기한(또는 소비기한)정보',
};

const detailKeyKorean = Object.keys(DETAIL_KEY_KOREAN);
