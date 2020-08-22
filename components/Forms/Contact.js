import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import HomeIcon from 'react-ionicons/lib/IosHomeOutline';
import BackIcon from 'react-ionicons/lib/IosArrowRoundBack';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import routeLink from '~/public/text/link';
import { withTranslation } from '~/i18n';
import useStyles from './form-style';

function Contact(props) {
  const { t } = props;
  const classes = useStyles();
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
      <IconButton href={routeLink.starter.home} className={classes.backtohome}>
        <HomeIcon />
        <BackIcon />
      </IconButton>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          {t('common:contact_title')}
        </Typography>
        <Typography className={classes.desc}>
          {t('common:contact_subtitle')}
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
                  label={t('common:form_name')}
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
                  label={t('common:form_email')}
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
                  label={t('common:form_phone')}
                  onChange={handleChange('phone')}
                  name="Phone"
                  value={values.phone}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextValidator
                  className={classes.input}
                  label={t('common:form_company')}
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
                  label={t('common:form_message')}
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
                    {t('common:form_terms')}
                    <br />
                    <a href="#">
                      {t('common:form_privacy')}
                    </a>
                  </span>
                )}
              />
              <Button variant="outlined" type="submit" color="primary" size="large">
                {t('common:form_send')}
                <SendIcon className={classes.rightIcon} />
              </Button>
            </div>
          </ValidatorForm>
        </div>
      </Container>
    </div>
  );
}

Contact.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(Contact);
