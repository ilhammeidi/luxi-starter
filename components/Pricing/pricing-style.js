import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'pricing' })(theme => ({
  pricingWrap: {
    marginTop: theme.spacing(5)
  },
  cardHeader: {
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
