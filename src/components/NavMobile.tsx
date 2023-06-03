import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/slices/menuSlice";

interface Props {
  className: string;
}

const NavMobile = ({ className }: Props): JSX.Element => {
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
          className="nav-mobile__link"
        >
          Inicio
        </Link>
        <Link
          onClick={handelNavMenu}
          to={"/resume"}
          className="nav-mobile__link"
        >
          Resumen
        </Link>
        <Link
          onClick={handelNavMenu}
          to={"/stack"}
          className="nav-mobile__link"
        >
          Stack
        </Link>
        <Link
          onClick={handelNavMenu}
          to={"/projects"}
          className="nav-mobile__link"
        >
          Proyectos
        </Link>
        <Link
          onClick={handelNavMenu}
          to={"/contact"}
          className="nav-mobile__link"
        >
          Escríbeme
        </Link>
      </div>
    </nav>
  );
};

export { NavMobile };
