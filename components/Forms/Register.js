import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import routeLink from 'public/text/link';
import Link from '../Link';
import SocialAuth from './SocialAuth';
import Title from '../Title/TitleSecondary';
import AuthFrame from './AuthFrame';
import useStyles from './form-style';

function Register() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
  });

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited');
  };

  return (
    <AuthFrame title={t('register_title')} subtitle={t('register_subtitle')}>
      <div>
        <div className={classes.head}>
          <Title align="left">{t('register')}</Title>
          <Button component={Link} size="small" className={classes.buttonLink} href={routeLink.starter.login}>
            <Icon className={cx(classes.icon, classes.signArrow)}>arrow_forward</Icon>
            {t('register_already')}
          </Button>
        </div>
        <SocialAuth />
        <div className={classes.separator}>
          <Typography>{t('register_or')}</Typography>
        </div>
        <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                className={classes.input}
                label={t('register_name')}
                onChange={handleChange('name')}
                name="name"
                value={values.name}
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                className={classes.input}
                label={t('register_email')}
                onChange={handleChange('email')}
                name="email"
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextValidator
                variant="filled"
                type="password"
                className={classes.input}
                label={t('register_password')}
                validators={['required']}
                onChange={handleChange('password')}
                errorMessages={['This field is required']}
                name="password"
                value={values.password}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextValidator
                variant="filled"
                type="password"
                className={classes.input}
                label={t('register_confirm')}
                validators={['isPasswordMatch', 'required']}
                errorMessages={['Password mismatch', 'this field is required']}
                onChange={handleChange('confirmPassword')}
                name="confirm"
                value={values.confirmPassword}
              />
            </Grid>
          </Grid>
          <div className={classes.btnArea}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={check}
                  onChange={(e) => handleCheck(e)}
                  color="secondary"
                  value={check}
                  className={classes.check}
                />
              )}
              label={(
                <span>
                  {t('form_terms')}
                  &nbsp;
                  <a href="#">
                    {t('form_privacy')}
                  </a>
                </span>
              )}
            />
            <Button variant="contained" fullWidth type="submit" color="secondary" size="large">
              {t('continue')}
            </Button>
          </div>
        </ValidatorForm>
      </div>
    </AuthFrame>
  );
}

export default Register;
