// store.tsx
import { configureStore } from "@reduxjs/toolkit";
import toggleMenuReducer from "../slices/toggleMenu";
import toggleProjectModalReducer from "../slices/toggleProjectModal";
import projectSelectedReducer from "../slices/ProjectSelected";
import formValuesReducer from "../slices/formValues";
import formErrorsReducer from "../slices/formErrors";

export const store = configureStore({
    reducer: {
        toggleMenu: toggleMenuReducer,
        toggleProjectModal: toggleProjectModalReducer,
        projectSelected: projectSelectedReducer,
        formValues: formValuesReducer,
        formErrors: formErrorsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
