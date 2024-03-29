import { TextAreaProps } from "../models/TextAreaProps";

const TextArea = ({
    name,
    placeholder,
    label,
    className,
    autoComplete,
    onChange,
    value,
    error,
}: TextAreaProps): JSX.Element => {
    const textAreaClasses = `textArea ${className}`;

    return (
        <div className="textarea">
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
            <p className={`textArea-error ${error ? "active" : ""}`}>
                * {label} no válido
            </p>
        </div>
    );
};

export { TextArea };
