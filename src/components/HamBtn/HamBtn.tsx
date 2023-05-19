import { useSelector, useDispatch } from 'react-redux';
import { StyledHamBtn } from './StyledHamBtn';
import { RootState } from '../../redux/store';
import { toggleMenu } from '../../slices/toggleMenu';



const HamBtn = (): JSX.Element => {
    const isMenuOpen = useSelector((state: RootState) => state.toggleMenu.value);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleMenu());
    }

    return (
        <StyledHamBtn onClick={handleClick}>
            <div className={`line  ${isMenuOpen && "active"}`}></div>
            <div className={`line  ${isMenuOpen && "active"}`}></div>
            <div className={`line  ${isMenuOpen && "active"}`}></div>
        </StyledHamBtn>
    );
};

export { HamBtn };