import React from 'react';
import { NavLink } from 'react-router-dom';
import './Filters.scss';

const Filters = ({ subCategories, clickSubcategory, maincategoriesId }) => {
  return (
    <div className="filters-wrapper">
      <ul>
        <li>전체보기</li>
        {subCategories.map(item => {
          return (
            <NavLink
              to={`/list/${item.subCategoriesId}`}
              key={item.subCategoriesId}
              onClick={clickSubcategory}
              id={item.subCategoriesId}
            >
              {item.subCategoriesName}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Filters;
