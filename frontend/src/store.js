import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {prodctListReducer,prodctDetailsReducer} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'
import {userLoginReducer,userRegisterReducer,userDetailsReducer} from './reducers/userReducer'


const reducer=combineReducers({
    productList:prodctListReducer,
    productDetail:prodctDetailsReducer,
    cart: cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDtails:userDetailsReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const cartInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  console.log(cartItemsFromStorage)
  const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin:{userInfo:cartInfoFromStorage},
  }

const middleware=[thunk];

const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
