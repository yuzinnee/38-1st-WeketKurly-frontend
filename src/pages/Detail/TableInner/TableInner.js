import React from 'react';
import './../TableInner/TableInner.scss';

const TableInner = props => {
  const { name, data, korean } = props;
  return (
    <dl className="dList">
      <dt className="dTitle">{korean[name]}</dt>
      <dd className="dDescription">{data[name]}</dd>
    </dl>
  );
};

export default TableInner;
