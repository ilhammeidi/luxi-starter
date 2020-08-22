import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Carousel from 'react-slick';
import Paper from '@material-ui/core/Paper';
import useStyle from './testi-style';
import { useTextAlign } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';

const testiContent = [
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe - CTO La Lieur'
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe - VP Company'
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe - Graphic Designer'
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin - Senior Graphic Designer'
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe - CEO Software House'
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin - Senior Graphic Designer'
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'Jovelin - Senior Graphic Designer'
  }
];

function Testimonials() {
  const classes = useStyle();
  const align = useTextAlign();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return (
    <div className={classes.testimonialWrap}>
      <Typography gutterBottom variant="h3" className={align.textCenter} display="block">
        Testimonials
      </Typography>
      <Typography gutterBottom variant="body1" className={align.textCenter} display="block">
        Curabitur egestas consequat lorem, vel fermentum augue porta id.
      </Typography>
      <div className={classes.carousel}>
        <Carousel {...settings}>
          {testiContent.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <Paper className={classes.card}>
                <Typography variant="body1" display="block">
                  {item.text}
                </Typography>
                <div className={classes.name}>
                  <Avatar alt={item.name} src={item.avatar} className={classes.avatar} />
                  <Typography variant="caption">
                    {item.name}
                  </Typography>
                </div>
              </Paper>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
