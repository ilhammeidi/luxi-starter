import React from 'react';
import Typography from '@material-ui/core/Typography';
import BackupIcon from '@material-ui/icons/Backup';
import ExploreIcon from '@material-ui/icons/Explore';
import MusicIcon from '@material-ui/icons/LibraryMusic';
import Grid from '@material-ui/core/Grid';
import useStyles from './feature-style';

function MainFeature() {
  const classes = useStyles();
  return (
    <div className={classes.pageSection}>
      <Grid container className={classes.root} spacing={6}>
        <Grid md={4} item>
          <div className={classes.featureList}>
            <BackupIcon className={classes.icon} />
            <Typography variant="h5">
              Lorem ipsum dolor
            </Typography>
            <Typography variant="body1">
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
            </Typography>
          </div>
        </Grid>
        <Grid md={4} item>
          <div className={classes.featureList}>
            <ExploreIcon className={classes.icon} />
            <Typography variant="h5">
              Lorem ipsum dolor
            </Typography>
            <Typography variant="body1">
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
            </Typography>
          </div>
        </Grid>
        <Grid md={4} item>
          <div className={classes.featureList}>
            <MusicIcon className={classes.icon} />
            <Typography variant="h5">
              Lorem ipsum dolor
            </Typography>
            <Typography variant="body1">
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainFeature;
