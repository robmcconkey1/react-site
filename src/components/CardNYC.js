import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import paris from '../assets/EP1.jpg';
import brooklyn from '../assets/brooklyn.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

 function CardNYC() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={brooklyn}
          title="New York"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">

            <Link href="/blog/Newyork" >
               New York
             </Link>

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The best way to plan a trip to New York
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );


}
export default CardNYC
