import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Item from '../../components/Item/Item';
import CartModal from '../../components/Modal/CartModal/CartModal';
import Modal from '../../components/Modal/Modal';
import Filters from './Filters/Filters';
import Sort from './Sort/Sort';
import API from '../../config';
import './List.scss';

const List = () => {
  const [sortTypes, setSortTypes] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  let { maincategoriesId } = useParams();

  const navigate = useNavigate();

  const handleOpenModal = item => {
    setModalItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const fetchProductList = api =>
    fetch(api, { method: 'GET' })
      .then(res => res.json())
      .then(result => {
        setProducts(result.item);
      });

  const clickSubcategory = e => {
    fetchProductList(`${API.listMainCategory}?subcategoriesId=${e.target.id}`);
  };

  const clickSortType = sortTypesId => {
    fetchProductList(`${API.listMainCategory}/1?sorttype=${sortTypesId}`);
  };

  useEffect(() => {
    fetch('/data/SORTED_DATA.json')
      .then(response => response.json())
      .then(result => {
        setSortTypes(result);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.listMainCategory}?maincategoriesId=${maincategoriesId}`)
      .then(response => response.json())
      .then(result => {
        setProducts(result.item);
        setSubCategories(SUBCATEGORIES[0].subCategory);
      });
  }, []);

  return (
    <div className="listPageContainer">
      <div className="listWrapper">
        <h3 className="listTitle">{SUBCATEGORIES[0].mainCategoriesName}</h3>
        <div className="contentContainer">
          <Filters
            subCategories={subCategories}
            clickSubcategory={clickSubcategory}
            maincategoriesId={maincategoriesId}
          />
          <Sort
            sortTypes={sortTypes}
            clickSortType={clickSortType}
            productslength={products?.length}
          />
          <div className="listGrid">
            {products.map(product => {
              return (
                <div
                  onClick={() =>
                    navigate(`/products/detail/${product?.productId}`)
                  }
                  key={product.productId}
                >
                  <Item
                    className="listGridCell"
                    contents={product}
                    type="default"
                    onOpenModal={handleOpenModal}
                  />
                </div>
              );
            })}
            {openModal && (
              <Modal
                contents={modalItem}
                type="cart"
                close={handleCloseModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

const SUBCATEGORIES = [
  {
    mainCategoriesId: 1,
    mainCategoriesName: '채소',
    subCategory: [
      {
        subCategoriesId: 1,
        subCategoriesName: '친환경',
      },
      {
        subCategoriesId: 2,
        subCategoriesName: '고구마・감자・당근',
      },
      {
        subCategoriesId: 3,
        subCategoriesName: '시금치・쌈채소・나물',
      },
      {
        subCategoriesId: 4,
        subCategoriesName: '브로콜리・파프리카・양배추',
      },
      {
        subCategoriesId: 5,
        subCategoriesName: '양파・대파・마늘・배추',
      },
      {
        subCategoriesId: 6,
        subCategoriesName: '오이・호박・고추',
      },
      {
        subCategoriesId: 7,
        subCategoriesName: '냉동・이색・간편채소',
      },
      {
        subCategoriesId: 8,
        subCategoriesName: '콩나물・버섯',
      },
    ],
  },
];
