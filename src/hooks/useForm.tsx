import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { resetFormValues, setFormValue } from "../redux/slices/formValuesSlice";
import { resetFormErrors, setFormError } from "../redux/slices/formErrorsSlice";
import axios from "axios";


const useForm = () => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [spinner, setSpinner] = useState<boolean>(false);

    const dispatch = useDispatch();

    const formValues = useSelector((state: RootState) => state.formValues);
    const formErrors = useSelector((state: RootState) => state.formErrors);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        dispatch(setFormValue({ name, value }));
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const errors = {
            name: formValues.name === "",
            email: !validateEmail(formValues.email),
            subject: formValues.subject === "",
            message: formValues.message === "",
        };
        dispatch(resetFormErrors());
        Object.entries(errors).forEach(([name, value]) =>
            dispatch(setFormError({ name, value }))
        );
        return !Object.values(errors).some((error) => error);
    };

    const handleFormSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        if (validateForm()) {
            try {
                setSpinner(true)
                const response = await axios.post(
                    "https://formspree.io/f/mjvdzreb",
                    {
                        formValues,
                    }
                );
                if (response.status === 200) {
                    dispatch(resetFormValues());
                    setIsSuccess(true);
                    setSpinner(false)
                }
            } catch (error) {
                setIsError(true);
                setSpinner(false)
            }
        }
    };

    const handleContactErrorMessage = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
        setIsError(false);
    };
    const handleContactSuccessMessage = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        setIsSuccess(false);
        event.preventDefault();
    };

    return {
        isSuccess,
        isError,
        handleFormSubmit,
        handleInputChange,
        handleContactErrorMessage,
        handleContactSuccessMessage,
        formValues,
        formErrors,
        spinner
    };
};

export { useForm };