import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Artwork from './Artwork';

@inject('artStore') @observer
class AllArt extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    console.log('before:', this.props.artStore.isLoading);
    this.props.artStore.loadArtwork();
    console.log('artStore:', this.props.artStore.artwork);
    console.log('after:', this.props.artStore.isLoading);
  }

  renderArtwork() {
    let artStore = this.props.artStore;
    if (artStore.isLoading) {
      return <div>Loading...</div>;
    } else {
      return <div>{
            artStore.artwork.slice().map( art =>
              <Artwork key={art.id} {...art} />
            )}</div>;
    }
  }

  sortitout(e, text) {
    console.log(text);
  }

  render() {
    return (
      <div id='allart'>
        <button onClick={this.sortitout('clicked')}>Click me</button>
        <div className='pure-g'>
          {this.renderArtwork()}
        </div>
    </div>
    );
  }
}

export default AllArt;
