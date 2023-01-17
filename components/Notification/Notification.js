import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import { useTranslation } from 'next-i18next';
import Slide from '@mui/material/Slide';
import useStyles from './notification-style';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function Notification() {
  const { t } = useTranslation('common');
  const { classes } = useStyles();
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
