export interface TextAreaProps {
    name?: string;
    placeholder?: string;
    label?: string;
    className?: string;
    autoComplete?: "" | "none";
    required?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: boolean;
    value?: string;
}