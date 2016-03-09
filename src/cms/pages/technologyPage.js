import React, {PropTypes,Component} from 'react';

let image = require('../../assets/images/pages/poster.png' );

const testStructure = {
  className: 'techPage',
  children: [
    <div className="page">
      <video
        style={{objectFit: true, outline: 'none'}}
        width="1080"
        height="608"
        src="https://s3-us-west-1.amazonaws.com/assets.foyerlive.com/manual/vionic/vionic_tech_video.webm"
        poster={image}
        preload="auto"
        controls="1"/>
      <div className="vionicTechnology"></div>
    </div>
  ]
};

export default testStructure