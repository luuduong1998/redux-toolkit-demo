import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:null
}

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: initialState },
    reducers: {
      getData: ( state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        // state.value = action.payload 
      },
      getDataSuccessfully:  ( state, action) => {
        console.log('success',action)
      },
      getDataFail:( state, action)=>{
        console.log('fail')
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { getData, getDataSuccessfully, getDataFail } = userSlice.actions
  export default userSlice.reducer