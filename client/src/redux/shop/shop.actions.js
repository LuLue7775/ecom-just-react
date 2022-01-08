import ShopActionTypes from './shop.types';

import {
  firestore,
  convertProductsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchProductsStart = () => ({
  type: ShopActionTypes.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = productsMap => ({
  type: ShopActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: productsMap
});

export const fetchProductsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage
});

export const fetchProductsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('products');
    dispatch(fetchProductsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const productsMap = convertProductsSnapshotToMap(snapshot);
        dispatch(fetchProductsSuccess(productsMap));
      })
      .catch(error => dispatch(fetchProductsFailure(error.message)));
  };
};