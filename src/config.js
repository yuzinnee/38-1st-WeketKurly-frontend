const BASE_URL = 'http://10.58.52.148:3000';

const API = {
  signIn: `${BASE_URL}/products`,
  signUp: `${BASE_URL}/list`,
  mainBanner: `${BASE_URL}/banner/big`,
  mainItem: `${BASE_URL}/products/recommend`,
  getCarts: `${BASE_URL}/carts/getcarts`,
  updateCarts: `${BASE_URL}/carts/update`,
  deleteCarts: `${BASE_URL}/carts`,
  postCarts: `${BASE_URL}/carts/input`,
  mainSubBanner: `${BASE_URL}/banner/small`,
};

export default API;
