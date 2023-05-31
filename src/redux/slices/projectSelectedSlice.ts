import { createSlice } from "@reduxjs/toolkit";

export interface ProjectSelectedState {
    value: string;
}

const initialState: ProjectSelectedState = {
    value: "",
};

const projectSelectedSlice = createSlice({
    name: "projectSelected",
    initialState,
    reducers: {
        projectSelected: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { projectSelected } = projectSelectedSlice.actions;

export default projectSelectedSlice.reducer;