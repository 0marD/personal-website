import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/slices/menuSlice";

interface Props {
  className: string;
}

const NavMobile = ({ className }: Props): JSX.Element => {
  // const isMenuOpen = useSelector((state: RootState) => state.menuToogle.isOpen);

  const dispatch = useDispatch();

  const handelNavMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <nav className={`nav-mobile ${className}`}>
      <div className="nav-mobile__container">
        <Link
          onClick={handelNavMenu}
          to={"/"}
          className="nav-mobile__link btn-style-v3"
        >
          Inicio
        </Link>
        <Link
          onClick={handelNavMenu}
          to={"/resume"}
          className="nav-mobile__link btn-style-v3"
        >
          Resumen
        </Link>
        <Link
          onClick={handelNavMenu}
          to={"/stack"}
          className="nav-mobile__link btn-style-v3"
        >
          Stack
        </Link>
        <Link
          onClick={handelNavMenu}
          to={"/projects"}
          className="nav-mobile__link btn-style-v3"
        >
          Proyectos
        </Link>
        <Link
          onClick={handelNavMenu}
          to={"/contact"}
          className="nav-mobile__link btn-style-v2"
        >
          Escríbeme
        </Link>
      </div>
    </nav>
  );
};

export { NavMobile };
