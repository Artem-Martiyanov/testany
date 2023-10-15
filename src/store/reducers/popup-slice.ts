import {createSlice, PayloadAction} from '@reduxjs/toolkit'


type messageType = 'success' | 'warning' | 'error'

interface PopupState {
  message: string,
  visibility: boolean,
  type: messageType
}


const initialState: PopupState = {
  message: '',
  visibility: false,
  type: 'success'
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopupVisibility: (state, action: PayloadAction<boolean>) => {
      state.visibility = action.payload
    },
    
    setPopupMessage: (state, action: PayloadAction<{ message: string, type: messageType}>) => {
      state.visibility = true
      state.message = action.payload.message
      state.type = action.payload.type
    },
  },
})


export const {
  setPopupMessage,
  setPopupVisibility
} = popupSlice.actions
