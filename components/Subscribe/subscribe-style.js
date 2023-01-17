import { makeStyles } from 'tss-react/mui';

const subscribeStyles = makeStyles({ uniqId: 'subscribe' })(theme => ({
  subscribeWrap: {
    maxWidth: 600,
    margin: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto -32px',
    },
    zIndex: 10,
    position: 'relative'
  },
  paper: {
    padding: theme.spacing(4)
  },
  textField: {
    marginTop: theme.spacing(3)
  },
  rightIcon: {
    marginLeft: theme.spacing()
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default subscribeStyles;
