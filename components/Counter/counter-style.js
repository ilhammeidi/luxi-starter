import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })((theme, _params, classes) => ({
  counterWrap: {
    background: theme.palette.primary.main,
    padding: theme.spacing(8, 0)
  },
  text: {},
  counterItem: {
    color: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
    '& i': {
      color: theme.palette.common.white,
      marginRight: theme.spacing(2),
      fontSize: 40,
      [theme.breakpoints.up('md')]: {
        fontSize: 80,
      },
    },
    [`& .${classes.text}`]: {
      '& h4': {
        fontWeight: 'bold',
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
