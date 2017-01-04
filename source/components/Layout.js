import React from 'react';

import Info from './Info/Info';
import information from './Info/infoStore';

import AllArt from './Art/AllArt';
import artwork from './Art/artStore';


export default class Layout extends React.Component {

  render() {
    return (
      <div className="container">
        <Info info={information}/>
        <AllArt artwork={artwork} />
      </div>
    );
  }
}
