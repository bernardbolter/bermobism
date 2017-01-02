import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import Masonry from 'react-masonry-component';

import Artwork from './Artwork';

var masonryOptions = {
  transitionDuration: '0.2s',
  percentPosition: true
};

@observer
export default class AllArt extends React.Component {

  componentDidMount() {
    console.log('before:', this.props.artwork.isLoading);
    this.props.artwork.loadArtwork();
    console.log('artStore:', this.props.artwork.artlist);
    console.log('after:', this.props.artwork.isLoading);
  }

  filter = (e) => {
    this.props.artwork.filter = e.target.value;
  }

  toggleSorting = (e) => {
    console.log(e.target.value);
    const artwork = this.props.artwork;
    switch (e.target.value) {
    case 'recent':
      artwork.recentChecked = true;
      artwork.ogChecked = false;
      artwork.randomChecked = false;
      break;
    case 'og':
      artwork.recentChecked = false;
      artwork.ogChecked = true;
      artwork.randomChecked = false;
      break;
    case 'random':
      artwork.recentChecked = false;
      artwork.ogChecked = false;
      artwork.randomChecked = true;
      break;
    }
  }

  toggleFilters = (e) => {
    const artwork = this.props.artwork;
    switch (e.target.value) {
    case 'ach':
      artwork.achChecked = !artwork.achChecked;
      break;
    case 'dcs':
      artwork.dcsChecked = !artwork.dcsChecked;
    }
  }

  render() {
    const { filter,
            filteredArt,
            recentChecked,
            ogChecked,
            randomChecked,
            achChecked,
            dcsChecked,
            bdaChecked,
            vlsChecked,
            acsChecked,
            ogpChecked,
            perChecked,
            watChecked } = this.props.artwork;

    const artworkList = filteredArt.slice().map( art =>(
      <Artwork key={art.id} {...art} />
    ));

    return (
      <section className="allart">

        {/* Top Header with link to Dropdown Search and Filter */}
        <div className="allart__header">
          <a href="#" className="allart__header--search">
            <h3>filter & search</h3>
            <p>|</p>
          </a>
          <a href="https://www.instagram.com/p/KVk_3HqAyu/" className="allart__header--world">
            <h1>the whole world + the work =</h1>
          </a>
        </div>

        {/* Dropdown Menu */}
        <div className="allart__dropdown">
          {/* Search and Sorting Options */}
          <div className="allart__sort">
            <input className="filter" value={filter} onChange={this.filter} />
            <p>sort by |</p>
              <label>most recent<input type="checkbox" value="recent" checked={recentChecked} onChange={this.toggleSorting} /></label>
              <label>most og<input type="checkbox" value="og" checked={ogChecked} onChange={this.toggleSorting} /></label>
              <label>random<input type="checkbox" value="random" checked={randomChecked} onChange={this.toggleSorting} /></label>
          </div>
          {/* Filter Options */}
          <div className="allart_filter">
            <p>filter by |</p>
              <label>a colorful history<input type="checkbox" value="ach" checked={achChecked} onChange={this.toggleFilters} /></label>
              <label>digital city series<input type="checkbox" value="dcs" checked={dcsChecked} onChange={this.toggleFilters} /></label>
              <label>breaking down art<input type="checkbox" value="bda" checked={bdaChecked} onChange={this.toggleFilters} /></label>
              <label>vanishing landscapes<input type="checkbox" value="vls" checked={vlsChecked} onChange={this.toggleFilters} /></label>
              <label>art collision<input type="checkbox" value="acs" checked={acsChecked} onChange={this.toggleFilters} /></label>
              <label>og paintings<input type="checkbox" value="ogp" checked={ogpChecked} onChange={this.toggleFilters} /></label>
              <label>performances<input type="checkbox" value="per" checked={perChecked} onChange={this.toggleFilters} /></label>
              <label>watercolors<input type="checkbox" value="wat" checked={watChecked} onChange={this.toggleFilters} /></label>
          </div>
        </div>

        {/* Artwork Gallery Section */}
        <div>
          <h1>{this.props.artwork.filter}</h1>
            <Masonry
                className={'artwork'}
                elementType={'ul'}
                options={masonryOptions}
              >
              { artworkList }
            </Masonry>
        </div>
      </section>
    );
  }
}
