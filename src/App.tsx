import { GlobalStyle } from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { HamBtn } from "./components/HamBtn/HamBtn";
import { Footer } from "./components/Footer/Footer";
import logo from "./assets/logo/logo-dark.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { Projects } from "./pages/Projects/Projects";
import { Skills } from "./pages/Skills/Skills";
import { ProjectModal } from "./components/ProjectModal/ProjectModal";
import { NavModal } from "./components/NavModal/NavModal";
import { Contact } from "./components/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header imageSrc={logo}>
          <HamBtn />
          <Navbar className="navbar-desk" />
        </Header>
        <NavModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ProjectModal />
    </>
  );
};

export { App };
