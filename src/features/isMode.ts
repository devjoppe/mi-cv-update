// Redux
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Interfaces
export interface isModeInt {
    mode: string
}

export interface isModeRootStateInt {
    isMode: isModeInt
}

export const modeSlice = createSlice({
    name: "isMode",
    initialState: {
        mode: "lightmode"
    } as isModeInt,
    reducers: {
        changeMode: (state, action:PayloadAction<string>) => {
            state.mode = action.payload
        }
    }
})

export const {changeMode} = modeSlice.actions

export default modeSlice.reducer