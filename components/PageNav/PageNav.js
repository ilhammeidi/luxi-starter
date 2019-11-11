import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import Fab from '@material-ui/core/Fab';
import ArrowIcon from '@material-ui/icons/ArrowUpward';
import Tooltip from '@material-ui/core/Tooltip';
import { withTranslation } from '~/i18n';
import navMenu from '../Header/menu';
import useStyles from './pagenav-style';

function createData(id, name, url) {
  return {
    id,
    name,
    url,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function PageNav(props) {
  const { t } = props;
  const [show, setShow] = useState(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = (scroll > 500);
    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const classes = useStyles();
  const [menuList] = useState([
    createData(1, navMenu[0], '#' + navMenu[0].replace(/ /g, '_')),
    createData(2, navMenu[1], '#' + navMenu[1].replace(/ /g, '_')),
    createData(3, navMenu[2], '#' + navMenu[2].replace(/ /g, '_')),
    createData(4, navMenu[3], '#' + navMenu[3].replace(/ /g, '_')),
  ]);
  return (
    <div className={clsx(classes.pageNav, show && classes.show)}>
      <Tooltip
        title="To Top"
        placement="left"
        classes={{
          tooltip: classes.tooltip
        }}
      >
        <Fab
          color="primary"
          aria-label="To top"
          component={LinkBtn}
          href="#home"
          className={classes.fab}
        >
          <ArrowIcon />
        </Fab>
      </Tooltip>
      <nav className={classes.sectionNav}>
        <Scrollspy
          items={navMenu}
          currentClassName="active"
        >
          { menuList.map(item => (
            <li
              key={item.id.toString()}
              style={{ top: 30 * (navMenu.length - item.id) }}
              data-id={item.id}
            >
              <Tooltip
                title={t('starter-landing:header_' + item.name)}
                placement="left"
                classes={{
                  tooltip: classes.tooltip
                }}
              >
                <AnchorLink href={item.url} />
              </Tooltip>
            </li>
          )) }
        </Scrollspy>
      </nav>
    </div>
  );
}

PageNav.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['starter-landing'])(PageNav);
