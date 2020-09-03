import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


import paris from '../assets/EP1.jpg'
import soho from '../assets/travel4-4.jpg'
import dublin from '../assets/traveldublin.jpg'
import nyc from '../assets/travel2-9.jpg'
import railing from '../assets/travel2-12.jpg'
import stpan from '../assets/travel14.jpg'
import temple from '../assets/resize1.1-3.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1500,
    height: 1050,
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

 const tileData = [
   {
     img: paris,
        title: 'paris',
     cols: 1,

   },
   {
     img: nyc,
        title: 'nyc',
     cols: 1,

   },
   {
     img: stpan,
        title: 'st pancras station',
     cols: 1,

   },
   {
     img: soho,
        title: 'soho',
     cols: 1,

   },{
     img: dublin,
        title: 'dublin',
     cols: 2,
   },
   {
     img: railing,
        title: 'new york',
     cols: 1,

   },

   {
     img: temple,
        title: 'temple, london',
     cols: 2,

   },
 ]
function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={360} cellWidth={1000} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 2}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default ImageGridList
