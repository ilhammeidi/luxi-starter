import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './blog-style';

const cards = [1, 2, 3];

function Blog() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography gutterBottom variant="h3" align="center" display="block">
        الموقع و التدوينات
      </Typography>
      <Typography gutterBottom variant="body1" align="center" display="block">
        Curabitur egestas consequat lorem, vel fermentum augue porta id.
      </Typography>
      {/* End hero unit */}
      <div className={classes.blogWrap}>
        <Grid container spacing={3}>
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
                    فقط من باب التغيير
                  </Typography>
                  <Typography>
                    لا يوجد ما هو جديد في هذا ككل و لكن يمكنك عمل هذا
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    قرائة المزيد
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
