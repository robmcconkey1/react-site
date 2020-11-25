import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardNYC from '../components/CardNYC'
import CardLondon from '../components/CardLondon'
import CardParis2 from '../components/CardParis'
import Layout from '../components/layout'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function FullWidthGrid() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <Layout>
      <Grid container spacing={2}>
        <Grid item xs={9} sm={4}>
          <CardNYC />
        </Grid>
        <Grid item xs={9} sm={4}>
          <CardParis2 />
        </Grid>
        <Grid item xs={9} sm={4}>
          <CardLondon />
        </Grid>
      </Grid>
      </Layout>
    </div>
    
  );
}

export default FullWidthGrid
