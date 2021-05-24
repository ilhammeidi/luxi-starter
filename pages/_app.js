import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import App from 'next/app';
import PropTypes from 'prop-types';
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles';
import { create } from 'jss';
import { PageTransition } from 'next-page-transitions';
import rtl from 'jss-rtl';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingBar from 'react-top-loading-bar';
import { i18n, appWithTranslation } from '../i18n';
import appTheme from '../theme/appTheme';
/* import css vendors */
import '../node_modules/animate.css/animate.css';
import '../vendors/animate-extends.css';
import '../vendors/react-top-loading-bar.css';
import '../vendors/page-transition.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';

let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MyApp(props) {
  const [loading, setLoading] = useState(0);
  const [theme, setTheme] = useState({
    ...appTheme('burgundy', themeType),
    direction: i18n.language === 'ara' ? 'rtl' : 'ltr'
  });

  useEffect(() => {
    // Set layout direction
    document.dir = i18n.language === 'ara' ? 'rtl' : 'ltr';

    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => { setLoading(100); }, 2000);

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme({
      ...appTheme('burgundy', newPaletteType),
      direction: theme.direction,
    });
  };

  const toggleDirection = dir => {
    document.dir = dir;
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette
      }
    });
  };

  const muiTheme = createMuiTheme(theme);
  const { Component, pageProps, router } = props; // eslint-disable-line
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <LoadingBar
            height={0}
            color={theme.palette.primary.main}
            progress={loading}
            className="top-loading-bar"
          />
          <div id="main-wrap">
            <PageTransition timeout={300} classNames="page-fade-transition">
              <Component
                {...pageProps}
                onToggleDark={toggleDarkTheme}
                onToggleDir={toggleDirection}
                key={router.route}
              />
            </PageTransition>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

MyApp.getInitialProps = async (appContext) => ({...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp);
