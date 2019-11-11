import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  testimonialWrap: {
    width: '100%',
    position: 'relative',
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

export default testiStyles;
