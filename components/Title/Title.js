import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './title-style';

export default function Title(props) {
  const classes = useStyles();
  const {
    caption,
    text,
    align,
    dark
  } = props;
  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;
      case 'right':
        return classes.right;
      case 'center':
        return classes.center;
      default:
        return classes.left;
    }
  };
  return (
    <div className={clsx(classes.title, setAlign(align), dark && classes.dark)}>
      <Typography display="block" variant="caption" className={classes.caption}>
        {caption}
      </Typography>
      <Typography variant="h4">
        {text}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  caption: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
  dark: PropTypes.bool,
};

Title.defaultProps = {
  align: 'left',
  dark: false
};
