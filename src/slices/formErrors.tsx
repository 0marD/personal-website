

//formErrors.
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormErrors {
    name: boolean;
    email: boolean;
    subject: boolean;
    message: boolean;
}

const initialState: FormErrors = {
    name: false,
    email: false,
    subject: false,
    message: false,
};

const formErrorsSlice = createSlice({
    name: "formErrors",
    initialState,
    reducers: {
        setFormError: (
            state,
            action: PayloadAction<{ name: string; value: boolean }>
        ) => {
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value,
            };
        },
        resetFormErrors: () => initialState,
    },
});

export const { setFormError, resetFormErrors } = formErrorsSlice.actions;
export default formErrorsSlice.reducer;
