import { ChangeEvent } from "react";

interface Props {
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
}: Props): JSX.Element => {
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
