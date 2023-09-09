import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './auth-slice'
import cartSlice from './cart-slice'

const store = configureStore({
     reducer:{
          auth: AuthSlice.reducer,
          cart:cartSlice.reducer
     }
})
export default store