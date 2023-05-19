import { Navbar } from "../Navbar/Navbar";
import { StyledNavModal } from "./StyledNavModal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleMenu } from "../../slices/toggleMenu";

const NavModal = (): JSX.Element => {
    const isMenuOpen = useSelector(
        (state: RootState) => state.toggleMenu.value
    );
    const dispatch = useDispatch();

    const handleCloseMenu = () => {
        dispatch(toggleMenu());
    };

    return (
        <StyledNavModal
            className={`${isMenuOpen && "active"}`}
            onClick={handleCloseMenu}
        >
            <Navbar />
        </StyledNavModal>
    );
};

export { NavModal };
