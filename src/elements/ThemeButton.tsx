import { BsLightbulbOffFill, BsLightbulbFill } from 'react-icons/bs';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';


interface Props {
    onClick: () => void;
    className: string;
}


const ThemeButton = ({ onClick, className }: Props): JSX.Element => {

    const theme = useSelector((state: RootState) => state.theme.isLightTheme);


    return (
        <button className={`theme-button ${className}`} onClick={onClick}>
            <div className="them-button__icons">
                <BsLightbulbOffFill className={`theme-button__icon ${!theme ? "active" : ""}`} />
                <BsLightbulbFill className={`theme-button__icon ${theme ? "active" :""}`} />
            </div>
        </button>
    )
}

export { ThemeButton }