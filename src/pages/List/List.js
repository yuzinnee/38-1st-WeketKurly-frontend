import React, { useEffect, useState } from 'react';
import './List.scss';
import Sort from './Sort/Sort';

const List = () => {
  const [sortTypes, setSortTypes] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/SORTED_DATA.json')
      .then(response => response.json())
      .then(result => {
        setSortTypes(result);
      });
  }, []);

  useEffect(() => {
    fetch('/data/PRODUCTS.json', {})
      .then(res => res.json())
      .then(result => setProducts(result.getMainCategoriesAllProducts));
  });

  return (
    <div className="listPageContainer">
      <div className="listWrapper">
        <h3 className="listTitle">Subcategory.Name</h3>
        <div className="contentContainer">
          <Filter />
          <Sort sortTypes={sortTypes} />
          <div className="listGrid">
            {products.map((product, index) => {
              return <DefaultItem key={index} contents={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

// 요청 (request) - http://url:3000/categories/main/${maincategoriesId}

const DefaultItem = ({ contents }) => {
  return (
    <div className="itemContainer">
      <img
        className="itemimg"
        src="https://images.unsplash.com/photo-1666307533559-070b90d171a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt="상품 이미지"
      />

      <p className="itemDescription">{contents?.productName}</p>
      <p className="itemPrice">{contents?.productPrice + `원`}</p>
    </div>
  );
};
