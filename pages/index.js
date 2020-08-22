import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import AnimateSlider from '../components/AnimateSlider';
import Feature from '../components/Feature';
import Counter from '../components/Counter';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Notification from '../components/Notification';
import brand from '../public/text/brand';

const sectionMargin = margin => (margin * 15);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing())
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing())
  },
  containerWrap: {
    marginTop: theme.spacing(15)
  },
}));

function Landing(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Home Page
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section>
            <Container fixed>
              <AnimateSlider />
            </Container>
          </section>
          <section className={clsx(classes.spaceTop, classes.spaceBottom)} id="feature">
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
          <section className={clsx(classes.spaceTop, classes.spaceBottom)} id="blog">
            <Blog />
          </section>
          <section id="subscribe">
            <Subscribe />
          </section>
        </main>
        <Hidden mdDown>
          <PageNav />
        </Hidden>
        <Footer toggleDir={onToggleDir} />
        <Hidden mdDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};


export default Landing;
