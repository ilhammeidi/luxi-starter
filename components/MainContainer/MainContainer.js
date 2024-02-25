import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import Header from 'components/Header';
import Footer from 'components/Footer';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'main_container' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(10),
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
  },
}));

function MainContainer(props) {
  const { classes } = useStyles();
  const {
    onToggleDark, onToggleDir,
    children, invert
  } = props;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert={invert}
        />
        {children}
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

MainContainer.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool
};

MainContainer.defaultProps = {
  invert: false
}

export default MainContainer;
