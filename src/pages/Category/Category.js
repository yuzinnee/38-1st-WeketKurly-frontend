import React from 'react';
import { useEffect, useState } from 'react';
import './Category.scss';

const Category = () => {
  const [mainCategories, setMainCategories] = useState([]);
  const [isMouseEntered, setisMouseEntered] = useState('');
  useEffect(() => {
    fetch('/data/CATEGORY.json')
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setMainCategories(result);
      });
  }, []);

  return (
    <div className="categoryContainer">
      <div className="mainCategory">
        {mainCategories?.map(maincategory => {
          console.log(maincategory.mainCategoriesId);
          return (
            <li
              key={maincategory.mainCategoriesId}
              id={maincategory.mainCategoriesId}
              className="mainCategories"
              onMouseEnter={() => setisMouseEntered(true)}
              onMouseLeave={() => setisMouseEntered(false)}
            >
              {maincategory.mainCategoriesName}
            </li>
          );
        })}
      </div>
      {isMouseEntered ? (
        <div className="subCategory">
          {mainCategories?.map(category => {
            console.log(category);
            return (
              <li key={subCategory.subCategoriesName} className="subCategories">
                .subCategory.map(subCategory => {
                  return subCategory.subCategoriesName;
                })}
              </li>
            );
          })}
        </div>
      ) : null}
      {/* {isMouseEntered ? (
        <div className="subCategory">
          {categories?.map(category => {
            console.log(categories);
            return (
              <li key={category.subCategoriesId} className="subCategories">
                {category.subCategoriesName}
              </li>
            );
          })}
        </div>
      ) : null} */}
      {/* <div className="subCategory">
        {categories?.map(category => {
          return (
            <li key={category.subCategoriesId} className="subCategories">
              {category.subCategoriesName}
            </li>
          );
        })}
      </div> */}
    </div>
  );
};

export default Category;

// const openSubCategories = e =>
//   fetch('http://10.58.52.148:3000/categories')
//     .then(res => res.json())
//     .then(result => {
//       console.log(e.target.id);
//       setCategories(result.data[e.target.id - 1]?.subCategories);
//     });

// useEffect(() => {
//   fetch(' http://10.58.52.148:3000/categories')
//     .then(res => res.json())
//     .then(result => {
//       // console.log(result.data);
//       setMainCategories(result.data);
//     });
// }, []);

// const openSubCategories = e => {
//   fetch('/data/CATEGORY.json')
//     .then(res => res.json())
//     .then(result => {
//       console.log(result);
//       setCategories(result[e.target.id - 1]?.subCategory);
//     });
// };
