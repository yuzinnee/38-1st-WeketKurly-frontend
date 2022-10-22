import React, { useState } from 'react';
import './MainFilterItem.scss';

const MainFilterItem = () => {
  const [selected, setSelected] = useState('');
  const [recommendList, setRecommendList] = useState([]);

  const filterItemList = endPoint => {
    fetch(`http://10.58.52.150:3000/products/${endPoint}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(res => res.json())
      .then(data => {
        setRecommendList(data.item);
      });
  };

  return (
    <div className="mainFilterItem">
      <p className="mdsRecommend">MD의 추천</p>
      <ul className="foodCategoryBox">
        {ITEM_CATEGORIES.map(categories => (
          <li key={categories.id}>
            {selected === categories.name ? (
              <button
                onClick={() => {
                  setSelected(categories.name);
                }}
                className="foodSelected"
              >
                {categories.name}
              </button>
            ) : (
              <button
                onClick={() => {
                  setSelected(categories.name);
                  filterItemList(categories.endPoint);
                }}
                className="foodCategory"
              >
                {categories.name}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ITEM_CATEGORIES = [
  { id: 1, name: '채소', endPoint: 1 },
  { id: 2, name: '과일 · 견과 · 쌀', endPoint: 2 },
  { id: 3, name: '수산 · 해산 · 건어물', endPoint: 3 },
  { id: 4, name: '정육 · 계란', endPoint: 4 },
  { id: 5, name: '국 · 반찬 · 메인요리', endPoint: 5 },
  { id: 6, name: '샐러드 · 간편식', endPoint: 6 },
  { id: 7, name: '면 · 양념 · 오일', endPoint: 7 },
  { id: 8, name: '생수 · 음료 · 우유 · 커피', endPoint: 8 },
  { id: 9, name: '간식 · 과자 · 떡', endPoint: 9 },
  { id: 10, name: '베이커리 · 치즈 · 델리', endPoint: 10 },
];

export default MainFilterItem;
