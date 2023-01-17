import React from 'react';
import Typography from '@mui/material/Typography';
import BackupIcon from '@mui/icons-material/Backup';
import ExploreIcon from '@mui/icons-material/Explore';
import MusicIcon from '@mui/icons-material/LibraryMusic';
import Grid from '@mui/material/Grid';
import useStyles from './feature-style';

function MainFeature() {
  const { classes } = useStyles();
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
