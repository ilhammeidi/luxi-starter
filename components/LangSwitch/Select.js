import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LangIcon from '@material-ui/icons/Language';
import InputAdornment from '@material-ui/core/InputAdornment';
import SelectMUI from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import useStyles from '../Footer/footer-style';
import languageDetector from '../../lib/languageDetector';
import i18nextConfig from '../../next-i18next.config';

function SelectLang(props) {
  const [ctn, setCtn] = useState(null);
  const classes = useStyles();

  // Translation Function
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  const [values, setValues] = useState({
    lang: i18n.language
  });

  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    const lang = event.target.value;

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: lang,
    }));

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

    languageDetector.cache(lang);
    if (lang === 'ar') {
      props.toggleDir('rtl');
    } else {
      props.toggleDir('ltr');
    }
  }

  return (
    <SelectMUI
      value={values.lang}
      onChange={handleChange}
      MenuProps={{
        container: ctn
      }}
      startAdornment={(
        <InputAdornment className={classes.icon} position="start">
          <LangIcon />
        </InputAdornment>
      )}
      className={classes.selectLang}
      input={<OutlinedInput labelWidth={200} name="lang" id="outlined-lang-simple" />}
    >
      {i18nextConfig.i18n.locales.map((locale) => (
        <MenuItem key={locale} value={locale}>{t(locale)}</MenuItem>
      ))}
    </SelectMUI>
  );
}

SelectLang.propTypes = {
  toggleDir: PropTypes.func,
};

SelectLang.defaultProps = {
  toggleDir: () => {},
};

export default SelectLang;
