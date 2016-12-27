import React from 'react';

const Artwork = props =>
  <div className='pure-u-1-3'>
    <h2>{props.title.rendered}</h2>
    <img src={props.imageMedium} />
  </div>;

export default Artwork;
