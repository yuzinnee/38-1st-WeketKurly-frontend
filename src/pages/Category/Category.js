import React from 'react';
import './Category.scss';

const Category = () => {
  return (
    <>
      <div className="category">
        <ul className="mainCategories">
          <li className="vegetable">채소</li>
          <li className="fruit">과일·견과·쌀</li>
          <li className="seafood">수산·해산·건어물</li>
          <li className="meat">정육·계란</li>
          <li className="soup">국·반찬·메인요리</li>
          <li className="salad">샐러드·간편식</li>
          <li className="noodle">면·양념·오일</li>
          <li className="water">생수·음료·우유·커피</li>
          <li className="snack">간식·과자·떡</li>
          <li className="bakery">베이커리·치즈·델리</li>
        </ul>
        <ul className="subCategories subVegetable">
          <li>친환경</li>
          <li>고구마·감자·당근</li>
          <li>시금치·쌈채소·나물</li>
          <li>브로콜리·파프리카·양배추</li>
          <li>양파·대파·마늘·배추</li>
          <li>오이·호박·고추</li>
          <li>냉동·이색·간편채소</li>
          <li>콩나물·버섯</li>
        </ul>
        <ul className="subCategories fruit">
          <li>친환경</li>
          <li>제철과일</li>
          <li>국산과일</li>
          <li>수입과일</li>
          <li>간편과일</li>
          <li>냉동·건과일</li>
          <li>견과류</li>
          <li>쌀·잡곡</li>
        </ul>
        <ul className="subCategories seafood">
          <li>제철수산</li>
          <li>생선류</li>
          <li>굴비·반건류</li>
          <li>오징어·낙지·문어</li>
          <li>새우·게·랍스터</li>
          <li>해산물·조개류</li>
          <li>수산가공품</li>
          <li>김·미역·해조류</li>
          <li>건어물·다시팩</li>
        </ul>
        <ul className="subCategories meat">
          <li>국내산 소고기</li>
          <li>수입산 소고기</li>
          <li>돼지고기</li>
          <li>계랸류</li>
          <li>닭·오리고기</li>
          <li>양념육·돈까스</li>
          <li>양고기</li>
        </ul>
        <ul className="subCategories soup">
          <li>국·탕·찌개</li>
          <li>밀키트·메인요리</li>
          <li>밑반찬</li>
          <li>김치·젓갈·장류</li>
          <li>두부·어묵·부침개</li>
          <li>베이컨·햄·통조림</li>
        </ul>
        <ul className="subCategories salad">
          <li>샐러드·닭가슴살</li>
          <li>도시락·밥류</li>
          <li>파스타·면류</li>
          <li>떡볶이·튀김·순대</li>
          <li>피자·핫도그·만두</li>
          <li>폭립·떡갈비·안주</li>
          <li>죽·스프·카레</li>
          <li>선식·시리얼</li>
        </ul>
        <ul className="subCategories noodle">
          <li>파스타·면류</li>
          <li>식초·소스·드레싱</li>
          <li>양념·액젓·장류</li>
          <li>식용유·참기름·오일</li>
          <li>소금·설탕·향신료</li>
          <li>밀가루·가루·믹스</li>
        </ul>
        <ul className="subCategories water">
          <li>생수·탄산수</li>
          <li>음료·주스</li>
          <li>우유·두유·요거트</li>
          <li>커피</li>
          <li>차</li>
        </ul>
        <ul className="subCategories snack">
          <li>과자·스낵·쿠키</li>
          <li>초콜릿·젤리·캔디</li>
          <li>떡·한과</li>
          <li>아이스크림</li>
        </ul>
        <ul className="subCategories bakery">
          <li>식빵·빵류</li>
          <li>잼·버터·스프레드</li>
          <li>케이크·파이·디저트</li>
          <li>치즈</li>
          <li>델리</li>
          <li>올리브·피클</li>
        </ul>
      </div>
    </>
  );
};

export default Category;
