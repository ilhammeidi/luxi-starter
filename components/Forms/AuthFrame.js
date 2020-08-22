import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import HomeIcon from 'react-ionicons/lib/IosHomeOutline';
import brand from '~/public/text/brand';
import routerLink from '~/public/text/link';
import logo from '~/public/images/logo.svg';
import useStyles from './form-style';

function AuthFrame(props) {
  const classes = useStyles();
  const { children, title, subtitle } = props;
  return (
    <div className={classes.pageWrap}>
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <a href={routerLink.starter.home}>
            <img src={logo} alt="logo" />
            <Typography component="span">
              {brand.starter.projectName}
            </Typography>
          </a>
        </div>
      </Hidden>
      <Container maxWidth="lg" className={classes.innerWrap}>
        <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
          <IconButton href={routerLink.starter.home} className={classes.backtohome}>
            <HomeIcon />
          </IconButton>
          <div className={classes.authFrame}>
            <Grid container spacing={0}>
              <Grid item md={5} xs={12}>
                <Hidden smDown>
                  <div className={classes.greeting}>
                    <div className={classes.logo}>
                      <img src={logo} alt="logo" />
                      <Typography>
                        {brand.starter.projectName}
                      </Typography>
                    </div>
                    <Typography gutterBottom variant="h4">
                      { title }
                    </Typography>
                    <Typography variant="h6">
                      { subtitle }
                    </Typography>
                  </div>
                </Hidden>
              </Grid>
              <Grid item md={7} xs={12}>
                <div className={classes.formWrap}>
                  {children}
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

AuthFrame.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

AuthFrame.defaultProps = {
  subtitle: '',
};

export default AuthFrame;
