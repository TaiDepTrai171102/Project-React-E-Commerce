import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./sagas";

import { adminProductReducer } from "./slices/admin.product.slice";
import { productReducer } from "./slices/product.slice";


const sagaMiddleware = createSagaMiddleware()
const middleware = [ sagaMiddleware ];

const rootReducer = {
    product: productReducer,
    adminProduct: adminProductReducer,
  
}

export const appStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middleware],
});

sagaMiddleware.run(mySaga);

