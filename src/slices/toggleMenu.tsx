import { createSlice } from "@reduxjs/toolkit";

export interface ToggleMenuState {
    value: boolean;
}

const initialState: ToggleMenuState = {
    value: false,
};

const toggleMenuSlice = createSlice({
    name: "toggleMenu",
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.value = !state.value;
        },
    },
});

export const { toggleMenu } = toggleMenuSlice.actions;

export default toggleMenuSlice.reducer;
