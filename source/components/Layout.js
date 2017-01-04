import React from 'react';

import Portal from './Portal/Portal';
import portal from './Portal/portalStore';

import Info from './Info/Info';
import information from './Info/infoStore';

import AllArt from './Art/AllArt';
import artwork from './Art/artStore';


export default class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <Portal portal={portal} />
        <Info info={information} />
        <AllArt artwork={artwork} ref="artworkComponent"/>
      </div>
    );
  }
}
