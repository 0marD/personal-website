import { basicsProps } from "../models/basicsProps"


const Header = ({ children }: basicsProps): JSX.Element => {
    return (
        <header className="header">
            {children}
        </header>
    )
}

export { Header }