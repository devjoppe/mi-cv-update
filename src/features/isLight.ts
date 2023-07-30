import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface isLightInt {
    light: boolean
}

export interface isLightRootStateInt {
    isLight: isLightInt
}

export const lightSlice = createSlice({
    name: "isLight",
    initialState: {
        light: false
    } as isLightInt,
    reducers: {
        changeLight: (state, action:PayloadAction<boolean>) => {
            state.light = action.payload
        }
    }
})

export default lightSlice.reducer