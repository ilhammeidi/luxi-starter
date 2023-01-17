import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'blog' })(theme => ({
  blogWrap: {
    marginTop: theme.spacing(5)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  pageSection: {
    marginBottom: theme.spacing(15)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
