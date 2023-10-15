import {createSlice} from '@reduxjs/toolkit'


interface AppState {
  fetching: boolean,
}


const initialState: AppState = {
  fetching: true,
}

export const appSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchEnd: (state) => {
      state.fetching = false
    },
    
    fetchStart: (state) => {
      state.fetching = true
    },
  },
})


export const {
  fetchStart,
  fetchEnd,
} = appSlice.actions
