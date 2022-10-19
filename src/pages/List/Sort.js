import './Sort.scss';

function Sort({ sortTypes, fn }) {
  return (
    <div className="sortBox">
      {/* total Amount of Items */}
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
