import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { useTranslation } from 'next-i18next';
import Slide from '@material-ui/core/Slide';
import useStyles from './notification-style';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function Notification() {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar
      TransitionComponent={TransitionUp}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      classes={{
        root: classes.notification,
      }}
      open={open}
      onClose={handleClose}
    >
      <SnackbarContent
        message={<Typography id="message-id">{t('notif_msg')}</Typography>}
        classes={{
          action: classes.action
        }}
        action={(
          <Button key="undo" variant="contained" className={classes.button} onClick={handleClose}>
            {t('accept')}
          </Button>
        )}
      />
    </Snackbar>
  );
}

export default Notification;
