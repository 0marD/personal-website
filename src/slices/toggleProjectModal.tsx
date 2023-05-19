import { createSlice } from "@reduxjs/toolkit";

export interface ToggleProjectModalState {
    value: boolean;
}

const initialState: ToggleProjectModalState = {
    value: false,
};

const toggleProjectModalSlice = createSlice({
    name: "toggleProjectModal",
    initialState,
    reducers: {
        toggleProjectModal: (state) => {
            state.value = !state.value;
        },
    },
});

export const { toggleProjectModal } = toggleProjectModalSlice.actions;

export default toggleProjectModalSlice.reducer;
