import React from 'react';
import { NavLink } from 'react-router-dom';
import './Filters.scss';

const Filters = ({ data, fn, maincategoriesId }) => {
  return (
    <div className="filters-wrapper">
      <ul>
        <li>'maincategoriesId 에 맞는 한글 이름이 들어갈 예정입니다'</li>
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
