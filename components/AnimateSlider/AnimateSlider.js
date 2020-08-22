import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Slider from 'react-animated-slider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './slider-style';
import 'react-animated-slider/build/horizontal.css';
import { withTranslation } from '~/i18n';
import '~/vendors/animate-slider.css';
import imgAPI from '~/public/images/imgAPI';

const content = [
  {
    title: 'title',
    button: 'Read More',
    image: imgAPI.photo[0],
    user: 'Luanda Gjokaj',
    userProfile: imgAPI.avatar[2],
  },
  {
    title: 'title',
    button: 'Discover',
    image: imgAPI.photo[0],
    user: 'Erich Behrens',
    userProfile: imgAPI.avatar[7],
  },
  {
    title: 'title',
    button: 'Buy now',
    image: imgAPI.photo[0],
    user: 'Bruno Vizovskyy',
    userProfile: imgAPI.avatar[8],
  }
];

function AnimateSlider(props) {
  const classes = useStyles();
  const { t } = props;
  return (
    <div className={classes.heroContent}>
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index.toString()}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <Typography variant="h1">{t('common:' + item.title)}</Typography>
              <Typography variant="body1">{t('common:starter-landing.description_text')}</Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by&nbsp;
                <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
}

AnimateSlider.propTypes = {
  t: PropTypes.func.isRequired,
};

AnimateSlider.getInitialProps = async () => ({
  namespacesRequired: ['common', 'starter-landing'],
});

export default withTranslation(['common', 'starter-landing'])(AnimateSlider);
