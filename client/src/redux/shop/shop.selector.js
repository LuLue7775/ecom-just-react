import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectProducts = createSelector(
  [selectShop],
  shop => shop.products  
);

export const selectProductsForPreview = createSelector(
  [selectProducts],
  products => products ? Object.keys(products).map(key => products[key]) : []
);

export const selectProduct = productUrlParam =>
  createSelector(
    [selectProducts],
    products => (products ? products[productUrlParam] : null)
  );

export const selectIsProductFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);


export const selectIsProductsLoaded = createSelector(
  [selectShop],
  shop => !!shop.products
);