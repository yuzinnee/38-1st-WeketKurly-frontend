import React, { useState } from 'react';
import Category from '../../pages/Category/Category';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBottomBox = () => {
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <div className="navBottomBox">
      <div
        className="navCategoryBox"
        onClick={() => {
          setOpenCategory(!openCategory);
        }}
      >
        <AiOutlineMenu className="navIcon" />
        <p className="navCategoryText">카테고리</p>
        {openCategory && <Category setOpenCategory={setOpenCategory} />}
      </div>
      <div className="navSelectBox">
        {NAV_MOCK.map((cur, idx) => (
          <p key={cur.id} className="navSelectText">
            {cur.menu}
          </p>
        ))}
      </div>
      <p className="navDeliveryGuide">
        <span>샛별 · 낮 </span>
        배송안내
      </p>
    </div>
  );
};

const NAV_MOCK = [
  { id: 0, menu: '신상품' },
  { id: 1, menu: '베스트' },
  { id: 2, menu: '알뜰쇼핑' },
  { id: 3, menu: '특가/혜택' },
];

export default NavBottomBox;
