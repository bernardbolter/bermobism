import React from 'react';
import { Provider, observer } from 'mobx-react';

import AllArt from './Art/AllArt';

import stores from '../stores';

export default class Layout extends React.Component {

  render() {
    return (
      <Provider artStore={stores.artStore}>
        <AllArt />
      </Provider>
    );
  }
}
