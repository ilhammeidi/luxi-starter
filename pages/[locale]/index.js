import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Hidden from '@mui/material/Hidden';
import { makeStyles } from 'tss-react/mui';
import Container from '@mui/material/Container';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import MainContainer from 'components/MainContainer';
import AnimateSlider from 'components/AnimateSlider';
import Feature from 'components/Feature';
import Counter from 'components/Counter';
import Testimonials from 'components/Testimonials';
import Pricing from 'components/Pricing';
import Blog from 'components/Blog';
import Subscribe from 'components/Subscribe';
import Footer from 'components/Footer';
import PageNav from 'components/PageNav';
import Notification from 'components/Notification';
import brand from 'public/text/brand';

const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  spaceBottom: {
    marginBottom: theme.spacing(15),
  },
  spaceTop: {
    paddingTop: theme.spacing(15)
  },
  containerWrap: {
    marginTop: theme.spacing(15)
  },
}));

function Landing(props) {
  const { classes, cx } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <MainContainer
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
      >
        <Fragment>
          <main className={classes.containerWrap}>
            <section>
              <Container fixed>
                <AnimateSlider />
              </Container>
            </section>
            <section className={cx(classes.spaceTop, classes.spaceBottom)} id="feature">
              <Container fixed>
                <Feature />
              </Container>
            </section>
            <section className={classes.pageSection}>
              <Counter />
            </section>
            <section className={classes.spaceTop} id="testimonials">
              <Testimonials />
            </section>
            <section className={classes.spaceTop} id="pricing">
              <Pricing />
            </section>
            <section className={cx(classes.spaceTop, classes.spaceBottomShort)} id="blog">
              <Blog />
            </section>
            <section className={classes.spaceBottom} id="subscribe">
              <Subscribe />
            </section>
          </main>
          <Hidden lgDown>
            <PageNav />
          </Hidden>
          <Hidden lgDown>
            <Notification />
          </Hidden>
        </Fragment>
      </MainContainer>
    </Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
