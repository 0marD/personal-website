import { InputProps } from "../models/InputProps";

const Input = ({
    name,
    type,
    placeholder,
    label,
    className,
    autoComplete = "none",
    value,
    error,
    onChange,
  }: InputProps): JSX.Element => {
    const inputClasses = `input ${className || ""}`;
  
    return (
      <div className="input">
        <label className="label" htmlFor={name}>
          {label}
        </label>
        <div className="input-wrapper">
          <input
            className={`input ${inputClasses}`}
            placeholder={placeholder}
            type={type}
            id={name}
            name={name}
            value={value}
            autoComplete={autoComplete}
            onChange={onChange}
          />
          <div className="bar"></div>
        </div>
        <p className={`input-error ${error && "active"}`}>* {label} no válido</p>
      </div>
    );
  };
  
  export { Input };