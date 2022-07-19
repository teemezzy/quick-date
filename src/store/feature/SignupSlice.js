import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api'

const initialState = {
  userData: {},
  otpNumber: '',
  otpSuccess: null
}

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    addUserData: (state, action) => {
      state['userData'] = action.payload;
    },
    addGenderPreference: (state, action) => {
      state['userData'] = { ...state.userData, ...action.payload };
    }
  },
  extraReducers(builder) {
    builder
      // Add OTP request status to state
      .addCase(getOtpCode.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getOtpCode.fulfilled, (state, action) => {
        state.otpSuccess = state.otpMessage(action.payload);
        state.status = 'success'
      })
      .addCase(getOtpCode.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Add create user to state
      .addCase(createUser.pending, (state, action) => {
        state.createUserStatus = 'loading';
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.createUserStatus = 'success';
        state.userData = action.payload;
        console.log(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.createUserStatus = 'failed';
        state.createUserError = action.error.message
      })
  }
})

export const getOtpCode = createAsyncThunk('otp/getOtp', async (data) => {
  const response = await api.post('/account/create_otp_phone', { phone: data })
  return response.data
})

export const createUser = createAsyncThunk('register/createUser', async (data) => {
  const response = await api.post('/register/create_user', { ...data });
  return response.data
})

export const { addUserData, addGenderPreference } = signupSlice.actions
export default signupSlice.reducer;