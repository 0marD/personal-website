
// formValues.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initialState: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const formValuesSlice = createSlice({
    name: "formValues",
    initialState,
    reducers: {
        setFormValue: (
            state,
            action: PayloadAction<{ name: string; value: string }>
        ) => {
            const { name, value } = action.payload;
            return {
                ...state,
                [name]: value,
            };
        },
        resetFormValues: () => initialState,
    },
});

export const { setFormValue, resetFormValues } = formValuesSlice.actions;
export default formValuesSlice.reducer;
