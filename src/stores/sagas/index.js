import { all, fork } from 'redux-saga/effects';
import { productSaga } from './product.saga';



export function* mySaga() {
    yield all([
        fork(productSaga)
    ]);
}