import { ChangeEvent } from "react";

export interface InputProps {
    name?: string;
    type?: "text" | "email";
    placeholder?: string;
    label?: string;
    className?: string;
    autoComplete?: "none";
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}