import React from 'react';
import { NavLink } from 'react-router-dom';
import './Filters.scss';

const Filters = ({ data, fn, maincategoriesId }) => {
  return (
    <div className="filters-wrapper">
      <ul>
        <li>전체보기</li>
        {data.map(item => {
          return (
            <NavLink
              to={`/List/sub/${item.subcategoriesId}`}
              key={item.subcategoriesId}
              onClick={fn}
            >
              {item.name}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Filters;
