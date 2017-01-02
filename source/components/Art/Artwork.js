import React from 'react';

const Artwork = props =>
  <li>
    <h2>{props.title.rendered}</h2>
    <img src={props.imageMedium} />
  </li>;

export default Artwork;
