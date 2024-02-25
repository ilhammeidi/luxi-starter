import React, { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import Link from '../Link';
import routeLink from 'public/text/link';
import useStyles from './form-style';

function Contact() {
  const { t } = useTranslation('common');
  const { classes } = useStyles();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <IconButton component={Link} href={routeLink.starter.home} className={classes.backtohome} size="large">
        <span>
          <i className="ion-ios-home-outline" />
          <i className="ion-ios-arrow-round-back" />
        </span>
      </IconButton>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          {t('contact_title')}
        </Typography>
        <Typography className={classes.desc}>
          {t('contact_subtitle')}
        </Typography>
        <div className={classes.form}>
          <ValidatorForm
            onSubmit={handleSubmit}
            onError={errors => console.log(errors)}
          >
            <Grid container spacing={6}>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={t('form_name')}
                  onChange={handleChange('name')}
                  name="Name"
                  value={values.name}
                  validators={['required']}
                  errorMessages={['this field is required']}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={t('form_email')}
                  onChange={handleChange('email')}
                  name="Email"
                  value={values.email}
                  validators={['required', 'isEmail']}
                  errorMessages={['this field is required', 'email is not valid']}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={t('form_phone')}
                  onChange={handleChange('phone')}
                  name="Phone"
                  value={values.phone}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={t('form_company')}
                  onChange={handleChange('company')}
                  name="Company"
                  value={values.company}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  multiline
                  rows="6"
                  className={classes.input}
                  label={t('form_message')}
                  onChange={handleChange('message')}
                  name="Message"
                  value={values.message}
                />
              </Grid>
            </Grid>
            <div className={classes.btnArea}>
              <FormControlLabel
                control={
                  <Checkbox checked={check} onChange={(e) => handleCheck(e)} color="primary" value="check" />
                }
                label={(
                  <span>
                    {t('form_terms')}
                    <br />
                    <a href="#">
                      {t('form_privacy')}
                    </a>
                  </span>
                )}
              />
              <Button variant="outlined" type="submit" color="primary" size="large">
                {t('form_send')}
                <SendIcon className={classes.rightIcon} />
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
