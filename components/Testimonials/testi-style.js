import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testimonial' })(theme => ({
  testimonialWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden'
  },
  carousel: {
    marginTop: theme.spacing(3)
  },
  item: {
    padding: theme.spacing(2)
  },
  card: {
    padding: theme.spacing(3)
  },
  name: {
    display: 'flex',
    marginTop: theme.spacing(),
    alignItems: 'center',
    '& span': {
      display: 'inline-block',
      marginLeft: theme.spacing()
    }
  },
  avatar: {
    width: 30,
    height: 30
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
