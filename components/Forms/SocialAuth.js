import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './form-style';

function SocialAuth() {
  const classes = useStyles();

  return (
    <section className={classes.socmedSideLogin}>
      <Button
        variant="contained"
        className={classes.naviBtn}
        type="button"
        size="large"
      >
        <i className="ion-logo-facebook" />
        Facebook
      </Button>
      <Button
        variant="contained"
        className={classes.blueBtn}
        type="button"
        size="large"
      >
        <i className="ion-logo-twitter" />
        Twitter
      </Button>
      <Button
        variant="contained"
        className={classes.redBtn}
        type="button"
        size="large"
      >
        <i className="ion-logo-google" />
        Google
      </Button>
    </section>
  );
}


export default SocialAuth;
