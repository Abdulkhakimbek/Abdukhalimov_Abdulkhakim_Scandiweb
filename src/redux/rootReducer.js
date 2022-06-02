import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cartReducer";
import currencyReducer from "./currencyReducer";
import shopReducer from "./shopReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
  shop: shopReducer,
  ui: uiReducer,
});

export default rootReducer;
