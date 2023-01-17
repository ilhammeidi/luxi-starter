import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import useStyles from './feature-style';
import { useTextAlign } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';

function MainFeature() {
  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();
  return (
    <div className={cx(classes.featureMore)}>
      <Grid container spacing={6}>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ScrollAnimation animateOnce animateIn="fadeInLeft" duration={0.6}>
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInLeft" delay={300} duration={0.6}>
              <Typography variant="body1" className={classes.text}>
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </ScrollAnimation>
          </div>
        </Grid>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ScrollAnimation animateOnce animateIn="zoomIn" delay={300} duration={0.6}>
              <div className={classes.deco1} />
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInRight" delay={500} duration={0.6}>
              <figure className={classes.img}>
                <img src={imgAPI.photo[5]} alt="img" />
              </figure>
            </ScrollAnimation>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ScrollAnimation animateOnce animateIn="zoomIn" delay={300} duration={0.6}>
              <div className={classes.deco1} />
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInLeft" delay={500} duration={0.6}>
              <figure className={classes.img}>
                <img src={imgAPI.photo[5]} alt="img" />
              </figure>
            </ScrollAnimation>
          </div>
        </Grid>
        <Grid md={6} item>
          <div className={classes.featureItem}>
            <ScrollAnimation animateOnce animateIn="fadeInRight" duration={0.6}>
              <Typography variant="h3" className={classes.title}>
                Lorem ipsum dolor
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInRight" delay={300} duration={0.6}>
              <Typography variant="body1" className={classes.text}>
                Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
              </Typography>
            </ScrollAnimation>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.root} spacing={6}>
        <Grid md={12} item>
          <div className={classes.featureMore}>
            <div className={cx(align.textCenter, classes.featureItem, classes.last)}>
              <ScrollAnimation animateOnce animateIn="fadeInUp" duration={0.6}>
                <Typography variant="h3" className={classes.title}>
                  Lorem ipsum dolor
                </Typography>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeInUp" delay={300} duration={0.6}>
                <Typography variant="body1" className={classes.text}>
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
                </Typography>
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="zoomIn" delay={300} duration={0.6}>
                <div className={classes.deco2} />
              </ScrollAnimation>
              <ScrollAnimation animateOnce animateIn="fadeInUp" delay={500} duration={0.6}>
                <figure className={classes.imgFull}>
                  <img src={imgAPI.photo[5]} alt="img" />
                </figure>
              </ScrollAnimation>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
