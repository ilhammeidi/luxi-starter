import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pricingWrap: {
    marginTop: theme.spacing(5)
  },
  cardHeader: {
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
