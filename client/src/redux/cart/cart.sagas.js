import {
  all,
  call,
  put,
  takeLatest,
  takeEvery,
  select,
} from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';

import { clearCart, setUserCart, mergeCartsSuccess } from './cart.actions';

import { selectCartItems } from './cart.selectors';
import { selectCurrentUser } from '../user/user.selectors';

import { getCartRefFromFirebase } from '../../firebase/firebase.utils';
import { mergeTwoCarts } from './cart.utils';

import { persistor } from '../store';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* resumePersist() {
  yield persistor.persist();
}

function* mergeReduxAndFirebaseCarts({ payload: user }) {
  try {
    const cartRef = yield getCartRefFromFirebase(user.id);
    const cartSnapshot = yield cartRef.get();
    const cartItems = yield select(selectCartItems); // cartItems stored in redux
    const firebaseCartItems = yield cartSnapshot.data().cartItems; // cartItems stored in Firebase
    // Merge cart from Firebase with current cart from redux store
    const mergedCart = yield mergeTwoCarts(cartItems, firebaseCartItems);
    // Stop persisting cart as it is being saved in Firebase now
    yield persistor.pause();
    yield persistor.purge();
    yield put(setUserCart(mergedCart));
    yield put(mergeCartsSuccess());
  } catch (err) {
    console.log(err);
  }
}

function* setUserCartInDB() {
  const currentUser = yield select(selectCurrentUser);

  if (currentUser) {
    try {
      const cartItems = yield select(selectCartItems);
      const cartRef = yield getCartRefFromFirebase(currentUser.id);
      yield cartRef.update({ cartItems });
    } catch (err) {
      console.log(err);
    }
  }
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, mergeReduxAndFirebaseCarts);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, resumePersist);
}

export function* onCartChange() {
  yield takeEvery(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
      CartActionTypes.MERGE_CARTS_SUCCESS,
    ],
    setUserCartInDB
  );
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onCartChange),
  ]);
}
