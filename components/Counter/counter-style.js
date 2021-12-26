import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
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
      marginRight: theme.spacing(2),
      color: theme.palette.common.white,
      fontSize: 40,
      [theme.breakpoints.up('md')]: {
        fontSize: 80,
      },
    },
    '& $text': {
      '& h4': {
        fontWeight: 'bold',
      }
    }
  }
}));

export default counterStyles;
