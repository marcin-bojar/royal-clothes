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

import { clearCart, setCartFromDB } from './cart.actions';

import { selectCartItems } from './cart.selectors';
import { selectCurrentUser } from '../user/user.selectors';

import { getCartRefFromFirebase } from '../../firebase/firebase.utils';
import { mergeTwoCarts } from './cart.utils';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* getUserCartFromDB({ payload: user }) {
  try {
    const cartRef = yield getCartRefFromFirebase(user.id);
    const cartSnapshot = yield cartRef.get();
    const cartItems = yield select(selectCartItems); // cartItems stored in redux
    const firebaseCartItems = yield cartSnapshot.data().cartItems; // cartItems stored in Firebase
    // Merge cart from DB with current cart from redux store
    const mergedCart = mergeTwoCarts(cartItems, firebaseCartItems);
    yield put(setCartFromDB(mergedCart));
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
      cartRef.update({ cartItems });
    } catch (err) {
      console.log(err);
    }
  }
}

export function* onSignInSuccess() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, getUserCartFromDB);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onCartChange() {
  yield takeEvery(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
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
