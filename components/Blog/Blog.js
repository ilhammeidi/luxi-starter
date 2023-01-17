import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useStyles from './blog-style';

const cards = [1, 2, 3];

function Blog() {
  const { classes } = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography gutterBottom variant="h3" align="center" display="block">
        Blog and News
      </Typography>
      <Typography gutterBottom variant="body1" align="center" display="block">
        Curabitur egestas consequat lorem, vel fermentum augue porta id.
      </Typography>
      {/* End hero unit */}
      <div className={classes.blogWrap}>
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Blog;
