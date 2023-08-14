// Redux
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

// Interfaces
export interface isLightInt {
    light: boolean
}

export interface isLightRootStateInt {
    isLight: isLightInt
}

export const lightSlice = createSlice({
    name: "isLight",
    initialState: { light: false } as isLightInt,
    reducers: {
        changeLight: (state, action:PayloadAction<boolean>) => {
            state.light = action.payload
        }
    }
})

export const {changeLight} = lightSlice.actions

export default lightSlice.reducer