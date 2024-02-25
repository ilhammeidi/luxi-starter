import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import CheckIcon from '@mui/icons-material/Check';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import i18nextConfig from 'next-i18next.config';
import languageDetector from 'lib/languageDetector';

const LanguageSwitch = ({
  locale,
  checked,
  toggleDir,
  ssg,
  closePopup,
}) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const changeLang = lang => {
    languageDetector.cache(lang);
    closePopup();

    if (i18nextConfig.ssg) {
      let href = router.asPath;
      let pName = router.pathname;
      Object.keys(router.query).forEach((k) => {
        if (k === 'locale') {
          pName = pName.replace(`[${k}]`, lang);
          return;
        }
        pName = pName.replace(`[${k}]`, router.query[k]);
      });
      if (lang) {
        href = pName;
      }
      router.push(href);
    } else {
      const { pathname, asPath, query } = router;
      router.push({ pathname, query }, asPath, { locale: lang });
    }

    if (lang === 'ar') {
      toggleDir('rtl');
    } else {
      toggleDir('ltr');
    }
  };

  return ssg ? (
    <ListItem
      role={undefined}
      dense
      button
      onClick={() => changeLang(locale)}
    >
      <ListItemIcon className="flag">
        <i className={locale} />
      </ListItemIcon>
      <ListItemText primary={t(locale)} />
      {checked && (
        <ListItemSecondaryAction>
          <CheckIcon color="primary" />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  ) : (
    <ListItem
      role={undefined}
      dense
      button
      onClick={() => changeLang(locale)}
    >
      <ListItemIcon className="flag">
        <i className={locale} />
      </ListItemIcon>
      <ListItemText primary={t(locale)} />
      {checked && (
        <ListItemSecondaryAction>
          <CheckIcon color="primary" />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

LanguageSwitch.propTypes = {
  locale: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  toggleDir: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  ssg: PropTypes.bool,
};

LanguageSwitch.defaultProps = {
  ssg: false,
};

export default LanguageSwitch;
