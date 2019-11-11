import React from 'react';
import Container from '@material-ui/core/Container';
import MainFeature from './MainFeature';
import MoreFeature from './MoreFeature';
import Parallax from './Parallax';
import useStyles from './feature-style';

function Feature() {
  const classes = useStyles();
  return (
    <div className={classes.featureWrap}>
      <Parallax />
      <Container fixed>
        <MainFeature />
        <MoreFeature />
      </Container>
    </div>
  );
}

export default Feature;
