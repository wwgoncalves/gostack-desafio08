import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { formatPrice } from '../../../util/format';
import { updateAmountSuccess, addToCartSuccess } from './actions';

import api from '../../../services/api';
import navigation from '../../../services/navigation';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  const productStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = productStock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('The required amount is not available.');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const product = yield call(api.get, `/products/${id}`);

    const productData = {
      ...product.data,
      amount: 1,
      formattedPrice: formatPrice(product.data.price),
    };

    yield put(addToCartSuccess(productData));

    navigation.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    return;
  }

  const productStock = yield call(api.get, `/stock/${id}`);
  const stockAmount = productStock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('The required amount is not available.');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
