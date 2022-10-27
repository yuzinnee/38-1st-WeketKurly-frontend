const BASE_URL = 'http://10.58.52.148:3000';

const API = {
  signIn: `${BASE_URL}/users/signin`,
  signUp: `${BASE_URL}/users/signup`,
  mainBanner: `${BASE_URL}/banner/big`,
  mainTimeDeal: `${BASE_URL}/products/main/specialprice`,
  category: `${BASE_URL}/categories`,
  mainItem: `${BASE_URL}/products/recommend`,
  getCarts: `${BASE_URL}/carts/getcarts`,
  updateCarts: `${BASE_URL}/carts/update`,
  deleteCarts: `${BASE_URL}/carts`,
  deleteCartsAll: `${BASE_URL}/carts/delete-carts`,
  postCarts: `${BASE_URL}/carts/input`,
  filterItem: `${BASE_URL}/products/md`,
  mainSubBanner: `${BASE_URL}/banner/small`,
  listSubCategory: `${BASE_URL}/categories/sub`,
  listMainCategory: `${BASE_URL}/products/categories`,
  listFilterItem: `${BASE_URL}/categories/main`,
  detailItem: `${BASE_URL}/detail`,
  fetchWishItem: `${BASE_URL}/likes/input`,
  fetchWishCheck: `${BASE_URL}/likes/getlikes`,
  submitReview: `${BASE_URL}/comments`,
};

export default API;
