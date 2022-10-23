import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Filters.scss';

const Filters = ({ data, fn }) => {
  console.log(data);
  return (
    <div className="filters-wrapper">
      <ul>
        <li>
          <Link to="/">전체보기</Link>
        </li>
        {data.map(item => {
          return (
            //Linkto api명세 확인
            <NavLink
              to={`/Shopping/${item.id}`}
              key={item.id}
              id={item.id}
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
