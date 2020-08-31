import React, {Component} from 'react'
import JustifiedGrid from 'react-justified-grid'
import image6 from './assets/resize3.1.jpg'

class MyImageGallery extends Component {
  return (
    < JustifiedGrid
      images={images}
      rows={3}
      maxRowHeight={64}
      gutter={1}/>
  );
}


const imageList = [{
  src: 'https://scontent.cdninstagram.com/vp/3fc240dca41408d36cc23f504fe1174e/5C66EC32/t51.2885-15/e35/s320x320/43817886_246662336018913_6991265436514516630_n.jpg',
  width: 320,
  height: 320
}, {
  src:{image6},
  width: 320,
  height: 167
}, {
  src:{image6},
  width: 320,
  height: 240
}, {
  src:{image6},
  width: 320,
  height: 400
}];
export default MyImageGallery
