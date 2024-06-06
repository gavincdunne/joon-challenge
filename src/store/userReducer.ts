import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  firstname: string,
  gender: string,
  children: string[],
  email: string,
  password: string
}

const initialState: UserState = {
  firstname: '',
  gender: '',
  children: [],
  email: '',
  password: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserFirstname: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload
    },
    setUserGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload
    },
    setUserChildren: (state, action: PayloadAction<string>) => {
      state.children.push(action.payload)
    },
    removeUserChild: (state, action: PayloadAction<number>) => {
      if (action.payload !== -1) {
        state.children.splice(action.payload, 1);
      }
    },
    editUserChild: (state, action: PayloadAction<{index: number, update: string}>) => {
      if (action.payload.index !== -1) {
        state.children.splice(action.payload.index, 1, action.payload.update);
      }
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setUserPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
})

export const { 
  setUserFirstname, 
  setUserGender, 
  setUserChildren,
  removeUserChild ,
  editUserChild, 
  setUserEmail, 
  setUserPassword
} = userSlice.actions

export default userSlice.reducer