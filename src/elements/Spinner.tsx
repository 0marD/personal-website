import { basicsProps } from "../models/basicsProps"

const Spinner = ({ className }: basicsProps): JSX.Element => {
    return (
        <div className={`spinner-container ${className}`}>
            <div className="spinner"></div>
            <p className="spinner__text">Enviando...</p>
        </div>
    )
}

export { Spinner }