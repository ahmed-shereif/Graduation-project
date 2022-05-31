import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
// for redux store
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'
import cartReducers from './reducers/cartReducers';
import { userLoginReducer } from './reducers/userReducers';
import { userDetailsReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userRegisterReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducers,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer

})


const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const intialState = {
    cart: {
        cartItems: cartItemsFromStorage
    },
    userLogin: {
        userInfo: userInfoFromStorage
    }
}
const middleware = [thunk];


const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;