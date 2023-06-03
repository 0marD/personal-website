import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/Header";
import logo from '/src/assets/logo.svg'
import { MenuBurger } from "./elements/MenuBurger";
import { Footer } from "./components/Footer";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { useSelectedProject } from "./hooks/useSelectedProject";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Stack } from "./pages/Stack";
import { Resume } from "./pages/Resume";
import { NavMobile } from "./components/NavMobile";
import { NavDesk } from "./components/NavDesk";
import { NotFound } from "./pages/NotFound";
import { ThemeButton } from "./elements/ThemeButton";
import { toggleTheme } from "./redux/slices/themeSlice";

function App(): JSX.Element {

  const theme = useSelector((state: RootState) => state.theme.isLightTheme);
  const isMenuOpen = useSelector((state: RootState) => state.menuToogle.isOpen);
  const dispatch = useDispatch()

  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  const [projectSelectedValue] = useSelectedProject();

  const projectSeleceted = projectSelectedValue

  return (

    <div className={`app ${theme ? "dark" : "dark"}`}>
      <ThemeButton onClick={handleTheme} className={`${theme ? "light" : "dark"}`}/>
      <Header>
        <Link to={"/"}>
          <img src={logo} alt="Omar Díaz logo" className="header__logo" />
        </Link>
        <NavDesk />
        <MenuBurger className="header__menu-toggle" />
      </Header>
      <NavMobile className={`nav-bar ${isMenuOpen && "active"}`} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path={`/project/${projectSeleceted}`} element={<ProjectDetail />} />
        <Route path={`/stack`} element={<Stack />} />
        <Route path={`/resume`} element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>

  )
}

export { App }
