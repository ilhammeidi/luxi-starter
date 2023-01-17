import { makeStyles } from 'tss-react/mui';

const decoration = theme => ({
  background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  borderRadius: '50%',
  width: 250,
  height: 250,
  position: 'absolute',
  top: -20,
  left: 60,
  opacity: 0.5
});

const featureStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  pageSection: {
    marginBottom: theme.spacing(20)
  },
  featureWrap: {
    position: 'relative'
  },
  icon: {},
  featureList: {
    textAlign: 'center',
    '& h5': {
      margin: `${theme.spacing(3)} 0`
    },
    [`& .${classes.icon}`]: {
      fill: theme.palette.primary.main,
      width: 100,
      height: 100
    }
  },
  featureMore: {
    position: 'relative',
    [`& .${classes.title}`]: {
      marginBottom: theme.spacing(3)
    },
    [`& .${classes.text}`]: {
      fontSize: 22
    },
    [`& .${classes.img}`]: {
      position: 'relative',
      width: 400,
      maxWidth: '98%',
      '& img': {
        width: '100%'
      }
    },
    [`& .${classes.imgFull}`]: {
      position: 'relative',
      textAlign: 'center',
      maxWidth: 800,
      margin: '0 auto',
      [theme.breakpoints.down('md')]: {
        maxWidth: '98%',
      },
      marginTop: theme.spacing(5),
      '& img': {
        width: '100%'
      }
    },
  },
  featureItem: {
    position: 'relative',
    marginBottom: theme.spacing(20),
    [`&.${classes.last}`]: {
      marginBottom: 0,
    }
  },
  deco1: {
    ...decoration(theme)
  },
  deco2: {
    ...decoration(theme),
    width: 450,
    height: 450,
    top: 40,
    left: 'calc(50% - 350px)',
  },
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    top: 0,
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& figure > div': {
      height: 1000,
      width: '100%',
      position: 'relative',
      top: 500,
    }
  },
  bannerParallaxWrap: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
    },
    '& figure > div': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
      top: 0,
    }
  },
  parallaxVertical: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(0.3)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
  },
  parallaxDot: {
    top: -20,
    fill: theme.palette.text.disabled,
    width: 845,
    height: 1099,
    opacity: 0.4,
    left: -370
  },
  parallaxTriangle: {
    top: 100,
    outline: theme.palette.text.disabled,
    opacity: 0.1,
    width: 902,
    height: 1042,
    stroke: theme.palette.text.disabled,
    fill: 'transparent',
    strokeWidth: 50,
    right: -210
  },
  parallaxCircle: {
    top: 250,
    width: 600,
    height: 570,
    opacity: 0.1,
    stroke: theme.palette.text.disabled,
    fill: 'transparent',
    strokeWidth: 40,
    right: 40
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featureStyles;
