// store.tsx
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import themeReducer from './slices/themeSlice'
import projectSelectedReducer from './slices/projectSelectedSlice'
import formErrorsReducer from './slices/formErrorsSlice'
import formValuesReducer from './slices/formValuesSlice'

export const store = configureStore({
  reducer: {
    menuToogle: menuReducer,
    theme: themeReducer,
    projectSelected:projectSelectedReducer,
    formErrors:formErrorsReducer,
    formValues:formValuesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
