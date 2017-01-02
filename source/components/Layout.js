import React from 'react';
import { Provider, observer } from 'mobx-react';

import AllArt from './Art/AllArt';
import artwork from './Art/artStore';


export default class Layout extends React.Component {

  render() {
    return (
      <Provider>
        <AllArt artwork={artwork} />
      </Provider>
    );
  }
}
