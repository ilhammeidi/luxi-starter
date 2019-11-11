import { makeStyles } from '@material-ui/core/styles';

const titleStyles = makeStyles(theme => ({
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
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 16,
    marginBottom: theme.spacing(),
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  dark: {},
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    '& h4': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'capitalize',
      lineHeight: '32px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 22
      }
    },
    '&$dark': {
      '& $caption': {
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

export default titleStyles;
