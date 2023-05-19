import { StyledTextArea } from './StyledTextArea';

interface Props {
    name: string;
    placeholder?: string;
    label: string;
    className?: string;
    autoComplete: "" | "none";
    required?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error: boolean
    value: string
}

const TextArea = ({
    name,
    placeholder,
    label,
    className,
    autoComplete,
    onChange,
    value,
    error
}: Props): JSX.Element => {
    const textAreaClasses = `textArea ${className}`;

    return (
        <StyledTextArea>
            <label className="label" htmlFor={name}>
                {label}
            </label>
            <div className="textArea-wrapper">
                <textarea
                    className={textAreaClasses}
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    value={value}
                    autoComplete={autoComplete}
                    rows={5}
                    onChange={onChange}
                />
                <div className="bar"></div>
            </div>
            <p className={`textArea-error ${error ? "active" : ""}`}>* {label} no válido</p>
        </StyledTextArea>
    );
};

export { TextArea };
