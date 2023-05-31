import "./sass/index.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import { MenuBurger } from "./components/MenuBurger";
import logo from "./assets/logo.svg";
import { Link } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Footer } from "./components/Footer";
import { Projects } from "./Routes/Projects";
import { ProjectDetail } from "./Routes/ProjectDetail";
import { Stack } from "./Routes/Stack";
import { Contact } from "./Routes/Contact";
import { useSelectedProject } from "./hooks/useSelectedProject";
import { NavMobile } from "./components/NavMobile";
import { Resume } from "./Routes/Resume";

const App = (): JSX.Element => {
  const theme = useSelector((state: RootState) => state.theme.isLightTheme);
  const isMenuOpen = useSelector((state: RootState) => state.menuToogle.isOpen);

  const [projectSelectedValue] = useSelectedProject();

  const projectSeleceted = projectSelectedValue

  return (
    <div className={`app ${theme ? "light" : "dark"}`}>
      <HashRouter>
        <Header>
          <Link to={"/"}>
            <img src={logo} alt="Omar Díaz logo" className="logo" />
          </Link>
          <MenuBurger />
        </Header>
        <NavMobile className={`${isMenuOpen && "active"}`}/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path={`/project/${projectSeleceted}`} element={<ProjectDetail/>}/>
            <Route path={`/stack`} element={<Stack/>}/>
            <Route path={`/contact`} element={<Contact/>}/>
            <Route path={`/resume`} element={<Resume/>}/>
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
};

export { App };
