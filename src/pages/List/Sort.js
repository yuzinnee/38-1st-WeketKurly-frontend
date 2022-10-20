import './Sort.scss';

function Sort({ sortTypes }) {
  return (
    <div className="sortBox">
      <div className="totalCount">총 979건</div>
      <ul className="sortTypes">
        {sortTypes.map(type => {
          return (
            <li key={type.id} className="sortType">
              {type.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sort;
