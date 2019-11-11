import React from 'react';
import Button from '@material-ui/core/Button';
import FacebookIcon from 'react-ionicons/lib/LogoFacebook';
import TwitterIcon from 'react-ionicons/lib/LogoTwitter';
import GoogleIcon from 'react-ionicons/lib/LogoGoogle';
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
        <FacebookIcon />
        Facebook
      </Button>
      <Button
        variant="contained"
        className={classes.blueBtn}
        type="button"
        size="large"
      >
        <TwitterIcon />
        Twitter
      </Button>
      <Button
        variant="contained"
        className={classes.redBtn}
        type="button"
        size="large"
      >
        <GoogleIcon />
        Google
      </Button>
    </section>
  );
}


export default SocialAuth;
