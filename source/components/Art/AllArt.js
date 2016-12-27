import React, { Component } from 'react';
import { observable  } from 'mobx';
import { observer, inject } from 'mobx-react';

import Artwork from './Artwork';

@inject('artStore') @observer
class AllArt extends React.Component {

  componentDidMount() {
    console.log('before:', this.props.artStore.isLoading);
    this.props.artStore.loadArtwork();
    console.log('artStore:', this.props.artStore.artwork);
    console.log('after:', this.props.artStore.isLoading);
  }

  renderArtwork() {
    var artStore = this.props.artStore;
    if (artStore.isLoading) {
      return <div>Loading...</div>;
    } else {
      return <div>{
            artStore.artwork.slice().map( art =>
              <Artwork key={art.id} {...art} />
            )}</div>;
    }
  }

  render() {
    return (
      <div id='allart'>
        <div className='pure-g'>
          {this.renderArtwork()}
        </div>
    </div>
    );
  }
}

export default AllArt;
