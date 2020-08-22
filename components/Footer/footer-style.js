import { makeStyles } from '@material-ui/core/styles';

const footerStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    position: 'relative',
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },
    '& p': {
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0, 3),
        textAlign: 'center'
      }
    }
  },
  title: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  logo: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    '& img': {
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      width: 48,
      marginRight: theme.spacing(),
    },
    '& h6': {
      color: theme.palette.text.disabled,
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: theme.spacing(0, 3)
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      background: theme.palette.divider,
      width: 36,
      height: 36,
      '& svg': {
        fill: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      }
    },
    '& svg': {
      width: 24,
      height: 24
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)',
    }
  },
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'inherit',
    marginTop: theme.spacing(2),
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '& $icon': {
      top: 21,
      position: 'relative',
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important',
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    maxWidth: 480,
    margin: '0 auto',
    marginTop: theme.spacing(2),
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  }
}));

export default footerStyles;
