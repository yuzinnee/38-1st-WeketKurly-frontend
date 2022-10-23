import React, { useEffect, useState, useParams } from 'react';
import { Link } from 'react-router-dom';
import './List.scss';
import Sort from './Sort/Sort';
import Filters from './Filters/Filters';
import DefaultItem from './../../components/Item/DefaultItem';

const List = () => {
  const [sortTypes, setSortTypes] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  let { maincategoriesId } = useParams();

  const fetchProductList = api =>
    fetch(api, { method: 'GET' })
      .then(res => res.json())
      .then(result => {
        setProducts(result);
      });

  const clickSubcategory = e => {
    fetchProductList(
      `http://10.58.52.148:3000/categories/sub/${e.target.subcategoriesId}`
    );
  };

  const clickSortType = sortTypesId => {
    fetchProductList(
      `http://10.58.52.148:3000/categories/main/1?sorttype=${sortTypesId}`
    );
  };

  useEffect(() => {
    fetch('/data/SORTED_DATA.json')
      .then(response => response.json())
      .then(result => {
        setSortTypes(result);
      });
  }, []);

  useEffect(() => {
    fetch(`http://10.58.52.148:3000/categories/main/${maincategoriesId}`)
      .then(response => response.json())
      .then(result => {
        setSubCategories(result[1]);
        setProducts(result[0]);
      });
  }, []);

  return (
    <div className="listPageContainer">
      <div className="listWrapper">
        <h3 className="listTitle">
          '/maincategoriesId에 해당하는 listTitle이 들어가는 자리입니다'
        </h3>
        <div className="contentContainer">
          <Filters
            data={subCategories}
            fn={clickSubcategory}
            maincategoriesId={maincategoriesId}
          />
          <Sort
            sortTypes={sortTypes}
            fn={clickSortType}
            productslength={products?.length}
          />
          <div className="listGrid">
            {products.map((product, index) => {
              return (
                <Link to="/detail/product.id" key={index}>
                  <DefaultItem contents={product} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
