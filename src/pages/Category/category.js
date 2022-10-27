import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../config';
import './Category.scss';

const Category = ({ setOpenCategory }) => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(API.category, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => {
        setCategories(result.data);
      });
  }, []);

  const findSubCategory = id => {
    const subCategory = categories.find(
      category => +category.mainCategoriesId === +id
    );

    if (!subCategory) return [];
    else return subCategory.subCategories;
  };

  return (
    <div
      className="categoryContainer"
      onMouseLeave={() => setOpenCategory(false)}
    >
      <div className="mainCategoryFrame">
        {categories.map(category => {
          return (
            <li
              key={category.mainCategoriesId}
              id={category.mainCategoriesId}
              className="mainCategoriesName"
              onMouseEnter={() => {
                setCategoryId(category.mainCategoriesId);
              }}
              onClick={() => {
                navigate(`/list/${category.mainCategoriesId}`);
              }}
            >
              {category.mainCategoriesName}
            </li>
          );
        })}
      </div>
      <div className="subcategoryFrame" onMouseLeave={() => setCategoryId(0)}>
        {findSubCategory(categoryId)?.map(category => {
          return (
            <li
              key={category.subCategoriesId}
              id={category.subCategoriesId}
              className="subCategoriesName"
              onClick={() => {
                navigate(`/list/sub/${category.subCategoriesId}`);
              }}
            >
              {category?.subCategoriesName}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
