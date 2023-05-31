import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleMenu } from "../redux/slices/menuSlice";
// import { toggleTheme } from "../redux/slices/themeSlice";

const MenuBurger = ():JSX.Element => {
    const isMenuOpen = useSelector((state: RootState) => state.menuToogle.isOpen);
    const dispatch = useDispatch();

    const handleMenuClick = () => {
        dispatch(toggleMenu());
        // dispatch(toggleTheme())
    }

    return (
        <div onClick={handleMenuClick} className="menu-burger">
            <div className={`line  ${isMenuOpen && "active"}`}></div>
            <div className={`line  ${isMenuOpen && "active"}`}></div>
            <div className={`line  ${isMenuOpen && "active"}`}></div>
        </div>
    );
}

export  {MenuBurger}