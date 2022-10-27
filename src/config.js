const BASE_URL = 'http://10.58.52.148:3000';

const API = {
  signIn: `${BASE_URL}/users/signin`,
  signUp: `${BASE_URL}/users/signup`,
  mainBanner: `${BASE_URL}/banner/big`,
  mainItem: `${BASE_URL}/products/recommend`,
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
