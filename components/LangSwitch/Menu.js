import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import CheckIcon from '@material-ui/icons/Check';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { useRouter } from 'next/router';
import Link from 'next/link';
import languageDetector from '../../lib/languageDetector';

const LanguageSwitch = ({
  locale,
  checked,
  toggleDir,
  ssg,
  ...rest
}) => {
  const router = useRouter();
  const { t } = useTranslation('common');

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k]);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  const changeLang = lang => {
    languageDetector.cache(lang);

    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: lang });

    if (lang === 'ar') {
      toggleDir('rtl');
    } else {
      toggleDir('ltr');
    }
  };

  return ssg ? (
    <Link href={href}>
      <ListItem
        role={undefined}
        dense
        button
        onClick={() => changeLang(locale)}
      >
        <ListItemIcon>
          <i className={locale} />
        </ListItemIcon>
        <ListItemText primary={t(locale)} />
        {checked && (
          <ListItemSecondaryAction>
            <CheckIcon color="primary" />
          </ListItemSecondaryAction>
        )}
      </ListItem>
    </Link>
  ) : (
    <ListItem
      role={undefined}
      dense
      button
      onClick={() => changeLang(locale)}
    >
      <ListItemIcon>
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
  ssg: PropTypes.bool,
};

LanguageSwitch.defaultProps = {
  ssg: false,
};

export default LanguageSwitch;
