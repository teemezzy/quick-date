import { configureStore } from '@reduxjs/toolkit'
import signupReducer from './feature/SignupSlice';
import loginReducer from './feature/LoginSlice';

export const appStore = configureStore({
    reducer: {
    signup: signupReducer,
    login: loginReducer
    }
})

