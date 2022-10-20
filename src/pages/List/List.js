import React, { useEffect, useState } from 'react';
import './List.scss';
import Sort from './Sort';

const List = ({ subCategoryItems }) => {
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
        <h3 className="listTitle">Subcategory.Name</h3>
        <div className="contentContainer">
          <Sort sortTypes={sortTypes} />
          <div className="listGrid">
            {subCategoryItems.map(item => {
              return <div key={item.id}>Item 컴포넌트가 들어올 자리입니다</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
