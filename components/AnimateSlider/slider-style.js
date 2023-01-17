import { makeStyles } from 'tss-react/mui';

const sliderStyles = makeStyles({ uniqId: 'slider' })(theme => ({
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  heroContent: {
    position: 'relative'
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyles;
