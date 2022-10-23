import './Sort.scss';

function Sort({ sortTypes, fn, productslength }) {
  return (
    <div className="sortBox">
      <div className="totalCount">총 {productslength}건</div>
      <ul className="sortTypes">
        {sortTypes.map((type, index) => {
          return (
            <li key={index} className="sortType" onClick={() => fn(index + 1)}>
              {type.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sort;
