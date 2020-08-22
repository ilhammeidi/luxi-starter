import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import CheckIcon from '@material-ui/icons/Check';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './header-style';
import { i18n, withTranslation } from '~/i18n';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const [ctn, setCtn] = useState(null);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDark, setDark] = useState(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  function handleChangeLang(lang) {
    if (lang === 'ar') {
      i18n.changeLanguage('ar');
      props.toggleDir('rtl');
    } else {
      i18n.changeLanguage(lang);
      props.toggleDir('ltr');
    }
  }

  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  });

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className={classes.setting}>
      <IconButton
        aria-describedby={id}
        aria-label="Settings"
        onClick={handleClick}
        className={clsx(classes.icon, open ? classes.active : '')}
      >
        <SettingsIcon fontSize="inherit" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        container={ctn}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List
          component="nav"
          className={classes.modeMenu}
          aria-label="Mode-menu"
          subheader={(
            <ListSubheader component="div">
              Theme Mode
            </ListSubheader>
          )}
        >
          <ListItem>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Light</Grid>
                <Grid item>
                  <Switch
                    checked={isDark}
                    onChange={handleChangeMode}
                    value={isDark}
                    inputProps={{ 'aria-label': 'checkbox' }}
                  />
                </Grid>
                <Grid item>Dark</Grid>
              </Grid>
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List
          component="nav"
          className={classes.langMenu}
          aria-label="Language-menu"
          subheader={(
            <ListSubheader component="div">
              Languages
            </ListSubheader>
          )}
        >
          {i18n.options.allLanguages && i18n.options.allLanguages.map(val => (
            <ListItem
              key={val}
              role={undefined}
              dense
              button
              onClick={() => handleChangeLang(val)}
            >
              <ListItemIcon>
                <i className={val} />
              </ListItemIcon>
              <ListItemText primary={props.t('common:' + val)} />
              {i18n.language === val && (
                <ListItemSecondaryAction>
                  <CheckIcon color="primary" />
                </ListItemSecondaryAction>
              )}
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
}

Settings.propTypes = {
  toggleDark: PropTypes.func.isRequired,
  toggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(Settings);
