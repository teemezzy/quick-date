import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../api'

const initialState = {
  userData: {},
  resStatus: '',
  message: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
//   reducers: {
//     getData: (state, action) => {
//       state['userData'] = action.payload;
//     },
//     addGenderPreference: (state, action) => {
//       state['userData'] = { ...state.userData, ...action.payload };
//     }
//   },
  extraReducers(builder) {
    builder
      // Fetch User data
      .addCase(getData.pending, (state, action) => {
        state.resStatus = 'loading'
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.userData = action.payload.data;
        state.resStatus = 'success';
        state.message = action.payload.message;
      })
      .addCase(getData.rejected, (state, action) => {
        state.resStatus = 'failed'
        state.error = action.error.message
      })
  }
})

export const getData = createAsyncThunk('user/getData', async (data) => {
  const response = await api.post('/register/login', { ...data })
  return response.data
})


// export const { getUserData } = signupSlice.actions
export default loginSlice.reducer;