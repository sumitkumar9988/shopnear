import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {prodctListReducer,
        prodctDetailsReducer,
        productDeleteReducer,
        productCreateReducer,
        productUpdateReducer,
        productReviewCreateReducer,
        productTopRatedReducer,} from './reducers/productReducer'
import {cartReducer} from './reducers/cartReducer'
import {userLoginReducer,
      userRegisterReducer,
      userDetailsReducer,
      userListReducer,
      userDeleteReducer,
      userUpdateReducer,
      userUpdateProfileReducer} from './reducers/userReducer'
import {orderCreateReducer,
        orderDetailsReducer,
        orderPayReducer,
        orderDeliverReducer,
        orderListReducer,
        orderListMyReducer} from './reducers/orderReducer'

const reducer=combineReducers({
    productList:prodctListReducer,
    productDetail:prodctDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    userList:userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const cartInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

  const initialState = {
    cart: {
       cartItems: cartItemsFromStorage ,
       shippingAddress:shippingAddressFromStorage
      },
    userLogin:{userInfo:cartInfoFromStorage},

  }

const middleware=[thunk];

const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
