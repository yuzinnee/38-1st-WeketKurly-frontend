import React, { useEffect, useState } from 'react';
import './List.scss';
import Sort from './Sort';
// import Filters from './Filters/Filters';

const List = () => {
  const [sortTypes, setSortTypes] = useState([]);

  useEffect(() => {
    fetch('/data/SORTED_DATA.json')
      .then(response => response.json())
      .then(result => {
        setSortTypes(result);
      });
  }, []);

  return (
    <div className="listPageContainer">
      <div className="listWrapper">
        {/* //subcategory */}
        <h3 className="listTitle">선물하기</h3>
        {/* 엔드포인트에서 받아오는 값에 따라 <Filter>컴포넌트 유무 판단 */}
        <div className="contentContainer">
          <Sort sortTypes={sortTypes} />
          <div className="listGrid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

const FILTER_MOCK = [
  { id: 1, item: '생수·탄산수', links: '/Water' },
  { id: 2, item: '음료·주스', links: '/' },
  { id: 3, item: '우유·두유·요거트', links: '/' },
  { id: 4, item: '커피', links: '/' },
  { id: 5, item: '차', links: '/' },
];
