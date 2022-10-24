import React from 'react';
import { useEffect, useState } from 'react';

const Category = () => {
  const [mainCategories, setMainCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const openSubCategories = e =>
    fetch('http://10.58.52.148:3000/categories')
      .then(res => res.json())
      .then(result => {
        console.log(e.target.id);
        setCategories(result.data[e.target.id - 1]?.subCategories);
      });

  useEffect(() => {
    fetch(' http://10.58.52.148:3000/categories')
      .then(res => res.json())
      .then(result => {
        // console.log(result.data);
        setMainCategories(result.data);
      });
  }, []);

  return (
    <div>
      {mainCategories?.map(maincategory => {
        console.log(mainCategories);
        return (
          <li
            key={maincategory.mainCategoriesId}
            id={maincategory.mainCategoriesId}
            onClick={openSubCategories}
          >
            {maincategory.mainCategoriesName}
          </li>
        );
      })}
      {categories?.map(category => {
        return (
          <li key={category.subCategoriesId}>{category.subCategoriesName}</li>
        );
      })}
    </div>
  );
};

export default Category;
