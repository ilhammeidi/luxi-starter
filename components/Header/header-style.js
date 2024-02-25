import { makeStyles } from 'tss-react/mui';
import flag from 'public/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  openDrawer: {},
  header: {
    position: 'fixed',
    color: theme.palette.text.primary,
    background: theme.palette.background.paper,
    boxShadow: 'none',
    transition: 'all 0.3s ease',
    '> *': {
      [theme.breakpoints.down('lg')]: {
        paddingLeft: 0
      }
    },
    [`&.${classes.fixed}`]: {
      boxShadow: theme.shadows[2],
      zIndex: 100,
      [`& .${classes.logo}`]: {
        '& img': {
          height: 32,
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
      },
      [`& .${classes.vDivider}`]: {
        minHeight: theme.spacing(3)
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
      boxShadow: 'none',
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      transition: 'all 0.3s ease',
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(2, 0),
      },
      display: 'flex'
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block'
    },
    '& img': {
      transition: 'all 0.3s ease',
      minWidth: '100%',
      height: 48,
      marginRight: theme.spacing(10),
    }
  },
  active: {},
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '> *': {
        margin: theme.spacing(0, 1),
      },
    },
    '& ul': {
      listStyle: 'none',
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '&[class="active"]': {
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: 4,
            background: theme.palette.primary.main,
            bottom: -14,
            left: 0,
          }
        }
      }
    },
  },
  userMenu: {
    '> a': {
      margin: theme.spacing(0, 1),
    }
  },
  langMenu: {
    '& i': {
      ...flagIcon
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      '& [class*="flag"]': {
        minWidth: 0,
        paddingRight: theme.spacing()
      }
    },
  },
  vDivider: {
    margin: theme.spacing(0, 1),
    borderLeft: `1px solid ${theme.palette.divider}`,
    height: '100%',
    minHeight: theme.spacing(6)
  },
  setting: {
    [`& .${classes.icon}`]: {
      transition: 'all 0.3s ease'
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  paperNav: {
    width: '100%',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    marginRight: theme.spacing(),
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary,
      }
    }
  },
  mobileNav: {
    background: theme.palette.background.paper,
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: 80,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
