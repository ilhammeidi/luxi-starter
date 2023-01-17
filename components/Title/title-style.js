import { makeStyles } from 'tss-react/mui';

const titleStyles = makeStyles({ uniqId: 'title' })((theme, _params, classes) => ({
  left: {
    textAlign: 'left',
    '&:after': {
      left: 0,
    }
  },
  right: {
    textAlign: 'right',
    '&:after': {
      right: 0,
    }
  },
  center: {
    textAlign: 'center',
    '&:after': {
      left: '50%',
      marginLeft: -35,
    }
  },
  caption: {
    textTransform: 'uppercase',
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 16,
    marginBottom: theme.spacing(),
    [theme.breakpoints.down('md')]: {
      fontSize: 12
    }
  },
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    '& h4': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'capitalize',
      lineHeight: '32px',
      [theme.breakpoints.down('md')]: {
        fontSize: 22
      }
    },
    [`&.${classes.dark}`]: {
      [`& .${classes.caption}`]: {
        color: theme.palette.primary.light
      },
      '& h4': {
        color: theme.palette.common.white,
      }
    }
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    '& h4': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'capitalize'
    },
    '& strong': {
      color: theme.palette.text.primary,
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default titleStyles;
