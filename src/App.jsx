import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Certificates } from './components/Certificates/Certificates';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Logo } from './components/Logo/Logo';
import { Main } from './components/Main/Main';
import { MenuHam } from './components/menuHam/MenuHam';
import { NavDesk } from './components/NavDesk/NavDesk';
import { NavMobile } from './components/NavMobile/NavMobile';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import {
  SwitchTheme,
  SwitchThemeDesk,
} from './components/SwitchTheme/SwitchTheme';
import { UpArrow } from './components/UpArrow/UpArrow';
import { useTheme } from './hooks/useTheme';
import { GlobalStyles } from './styledComponents/GlobalStyles';
import { Themes } from './themes/themes';

function App() {
  const { theme, changeTheme } = useTheme();
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyles />
        <SwitchThemeDesk theme={theme} changeTheme={changeTheme} />
        <UpArrow />
        <NavMobile
          changeTheme={changeTheme}
          menuState={menuState}
          setMenuState={setMenuState}
        >
          <SwitchTheme theme={theme} changeTheme={changeTheme} />
        </NavMobile>
        <Header>
          <Logo />
          <MenuHam menuState={menuState} setMenuState={setMenuState} />
          <NavDesk />
        </Header>
        <Main>
          <Home />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </Main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
