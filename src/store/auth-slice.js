import {createSlice} from '@reduxjs/toolkit'


const AuthSlice = createSlice({
     name:'auth',
     initialState: { isLoggedIn: false},
     reducers:{
          login(state){
               state.isLoggedIn = true
          },
          logout(state){
               state.isLoggedIn = false
          },
     }
})

export default AuthSlice
export const AuthActions = AuthSlice.actions