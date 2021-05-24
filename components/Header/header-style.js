import { makeStyles } from '@material-ui/core/styles';
import flag from '~/public/images/flag-logo.png';

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
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles(theme => ({
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
    '& > *': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      }
    },
    '&$fixed': {
      boxShadow: theme.shadows[2],
      '& $logo': {
        '& img': {
          height: 32,
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
      },
      '& $vDivider': {
        minHeight: theme.spacing(3)
      }
    },
    '&$openDrawer': {
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
      [theme.breakpoints.down('md')]: {
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
      height: 48
    }
  },
  active: {},
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
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
    }
  },
  userMenu: {
    '& > a': {
      margin: theme.spacing(0, 1),
    }
  },
  langMenu: {
    '& i': {
      ...flagIcon
    }
  },
  vDivider: {
    margin: theme.spacing(0, 1),
    borderLeft: `1px solid ${theme.palette.divider}`,
    height: '100%',
    minHeight: theme.spacing(6)
  },
  icon: {},
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease'
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  paperNav: {
    width: '100%',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    marginRight: theme.spacing(),
    '& $bar': {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary,
      }
    }
  },
  mobileNav: {
    background: theme.palette.background.paper,
    '& $menu': {
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

export default headerStyles;
