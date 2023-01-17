import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'error' })(theme => ({
  errorWrap: {
    width: '100%',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(25)
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      height: 320,
    },
    '& h3': {
      fontFamily: 'Roboto Condensed',
      color: theme.palette.common.white,
      fontSize: 106,
      textTransform: 'capitalize',
      fontWeight: 700,
      paddingTop: 40,
      paddingLeft: 20,
      position: 'relative',
      zIndex: 1,
    },
    '&:before': {
      content: '""',
      width: 210,
      height: 220,
      background: theme.palette.primary.main,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(-1),
      left: 0,
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      paddingLeft: theme.spacing(5),
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
    '& p': {
      fontSize: 22,
      color: theme.palette.text.secondary
    }
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
