import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './counter-style';

function Counter() {
  const classes = useStyles();
  const [play, setPlay] = useState(false);

  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid container justifyContent="center" alignItems="center" className={classes.root} spacing={6}>
          <Grid md={4} item>
            <ScrollAnimation animateOnce animateIn="fadeIn" offset={1500} afterAnimatedIn={handlePlay}>
              <div className={classes.counterItem}>
                <i className="icon ion-ios-leaf-outline" />
                <div className={classes.text}>
                  <Typography variant="h4">
                    {countup(123, play)}
                  </Typography>
                  <Typography variant="h6">
                    Lorem Ipsum dolor
                  </Typography>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <i className="icon ion-ios-bulb-outline" />
              <div className={classes.text}>
                <Typography variant="h4">
                  {countup(456, play)}
                </Typography>
                <Typography variant="h6">
                  Pellentesque ac bibendum
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <i className="icon ion-ios-globe-outline" />
              <div className={classes.text}>
                <Typography variant="h4">
                  {countup(789, play)}
                </Typography>
                <Typography variant="h6">
                  Consectetur adipiscing
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Counter;
