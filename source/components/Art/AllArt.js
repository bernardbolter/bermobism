import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Masonry from 'react-masonry-component';

import Artwork from './Artwork';

var masonryOptions = {
  transitionDuration: '0.2s',
  percentPosition: true
};

@observer
export default class AllArt extends React.Component {

  componentDidMount() {
    this.props.artwork.loadArtwork();
  }

  render() {
    const { filter,
            filteredArt,
            dropOn,
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
            watChecked,
            draChecked,
            phoChecked } = this.props.artwork;

    const artworkList = filteredArt.slice().map( art =>(
      <Artwork key={art.id} {...art} />
    ));

    return (
      <section className="allart">

        {/* Top Header with link to Dropdown Search and Filter */}
        <div className="allart-header">
          <a href="#" className="allart-search" onClick={this.dropdown}>
            <h3>filter & search</h3>
            <div className={this.props.artwork.dropOn ? 'allart-button allart-button-open' : 'allart-button'}></div>
          </a>
          <a href="https://www.instagram.com/p/KVk_3HqAyu/" className="allart-world">
            <h1>the whole world + the work =</h1>
          </a>
        </div>

        {/* Dropdown Menu */}
        <div className="allart-dropdown">
          {/* Search and Sorting Options */}
          <div className="allart-sort">
            <input className="filter" value={filter} onChange={this.filter} />
            <p>sort by |</p>
              <label>most recent<input type="checkbox" value="recent" checked={recentChecked} onChange={this.toggleSorting} /></label>
              <label>most og<input type="checkbox" value="og" checked={ogChecked} onChange={this.toggleSorting} /></label>
              <label>random<input type="checkbox" value="random" checked={randomChecked} onChange={this.toggleSorting} /></label>
          </div>
          {/* Filter Options */}
          <div className="allart-filter">
            <p>filter by |</p>
              <label>a colorful history<input type="checkbox" value="ach" checked={achChecked} onChange={this.toggleFilters} /></label>
              <label>digital city series<input type="checkbox" value="dcs" checked={dcsChecked} onChange={this.toggleFilters} /></label>
              <label>breaking down art<input type="checkbox" value="bda" checked={bdaChecked} onChange={this.toggleFilters} /></label>
              <label>vanishing landscapes<input type="checkbox" value="vls" checked={vlsChecked} onChange={this.toggleFilters} /></label>
              <label>art collision<input type="checkbox" value="acs" checked={acsChecked} onChange={this.toggleFilters} /></label>
              <label>og paintings<input type="checkbox" value="ogp" checked={ogpChecked} onChange={this.toggleFilters} /></label>
              <label>performances<input type="checkbox" value="per" checked={perChecked} onChange={this.toggleFilters} /></label>
              <label>watercolors<input type="checkbox" value="wat" checked={watChecked} onChange={this.toggleFilters} /></label>
              <label>drawing<input type="checkbox" value="dra" checked={draChecked} onChange={this.toggleFilters} /></label>
              <label>photography<input type="checkbox" value="pho" checked={phoChecked} onChange={this.toggleFilters} /></label>
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

  dropdown = (e) => {
    e.preventDefault();
    const artwork = this.props.artwork;
    artwork.dropOn = !artwork.dropOn;
  }

  filter = (e) => {
    this.props.artwork.filter = e.target.value;
  }

  toggleSorting = (e) => {
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
    console.log('filter: ', e.target.value);
    const artwork = this.props.artwork;
    switch (e.target.value) {
    case 'ach':
      if (artwork.achChecked == true) {
        artwork.achChecked = false;
      } else {
        artwork.achChecked = true;
        artwork.dcsChecked = false;
        artwork.bdaChecked = false;
        artwork.vlsChecked = false;
        artwork.acsChecked = false;
        artwork.ogpChecked = false;
        artwork.perChecked = false;
        artwork.watChecked = false;
        artwork.draChecked = false;
        artwork.phoChecked = false;
      }
      break;
    case 'dcs':
      if (artwork.dcsChecked == true) {
        artwork.dcsChecked = false;
      } else {
        artwork.achChecked = false;
        artwork.dcsChecked = true;
        artwork.bdaChecked = false;
        artwork.vlsChecked = false;
        artwork.acsChecked = false;
        artwork.ogpChecked = false;
        artwork.perChecked = false;
        artwork.watChecked = false;
        artwork.draChecked = false;
        artwork.phoChecked = false;
      }
      break;
    case 'bda':
      if (artwork.bdaChecked == true) {
        artwork.bdaChecked = false;
      } else {
        artwork.achChecked = false;
        artwork.dcsChecked = false;
        artwork.bdaChecked = true;
        artwork.vlsChecked = false;
        artwork.acsChecked = false;
        artwork.ogpChecked = false;
        artwork.perChecked = false;
        artwork.watChecked = false;
        artwork.draChecked = false;
        artwork.phoChecked = false;
      }
      break;
    case 'vls':
      if (artwork.vlsChecked == true) {
        artwork.vlsChecked = false;
      } else {
        artwork.achChecked = false;
        artwork.dcsChecked = false;
        artwork.bdaChecked = false;
        artwork.vlsChecked = true;
        artwork.acsChecked = false;
        artwork.ogpChecked = false;
        artwork.perChecked = false;
        artwork.watChecked = false;
        artwork.draChecked = false;
        artwork.phoChecked = false;
      }
      break;
    case 'acs':
      if (artwork.acsChecked == true) {
        artwork.acsChecked = false;
      } else {
        artwork.achChecked = false;
        artwork.dcsChecked = false;
        artwork.bdaChecked = false;
        artwork.vlsChecked = false;
        artwork.acsChecked = true;
        artwork.ogpChecked = false;
        artwork.perChecked = false;
        artwork.watChecked = false;
        artwork.draChecked = false;
        artwork.phoChecked = false;
      }
      break;
    case 'ogp':
      if (artwork.ogpChecked == true) {
        artwork.ogpChecked = false;
      } else {
        console.log('ogp!');
        artwork.achChecked = false;
        artwork.dcsChecked = false;
        artwork.bdaChecked = false;
        artwork.vlsChecked = false;
        artwork.acsChecked = false;
        artwork.ogpChecked = true;
        artwork.perChecked = false;
        artwork.watChecked = false;
        artwork.draChecked = false;
        artwork.phoChecked = false;
      }
      break;
    case 'per':
      if (artwork.perChecked == true) {
        artwork.perChecked = false;
      } else {
        artwork.achChecked = false;
        artwork.dcsChecked = false;
        artwork.bdaChecked = false;
        artwork.vlsChecked = false;
        artwork.acsChecked = false;
        artwork.ogpChecked = false;
        artwork.perChecked = true;
        artwork.watChecked = false;
        artwork.draChecked = false;
        artwork.phoChecked = false;
      }
      break;
    case 'wat':
      if (artwork.watChecked == true) {
        artwork.watChecked = false;
      } else {
        artwork.achChecked = false;
        artwork.dcsChecked = false;
        artwork.bdaChecked = false;
        artwork.vlsChecked = false;
        artwork.acsChecked = false;
        artwork.ogpChecked = false;
        artwork.perChecked = false;
        artwork.watChecked = true;
        artwork.draChecked = false;
        artwork.phoChecked = false;
      }
      break;
    case 'dra':
      if (artwork.draChecked == true) {
        artwork.draChecked = false;
      } else {
        artwork.achChecked = false;
        artwork.dcsChecked = false;
        artwork.bdaChecked = false;
        artwork.vlsChecked = false;
        artwork.acsChecked = false;
        artwork.ogpChecked = false;
        artwork.perChecked = false;
        artwork.watChecked = false;
        artwork.draChecked = true;
        artwork.phoChecked = false;
      }
      break;
    case 'pho':
      if (artwork.phoChecked == true) {
        artwork.phoChecked = false;
      } else {
        artwork.achChecked = false;
        artwork.dcsChecked = false;
        artwork.bdaChecked = false;
        artwork.vlsChecked = false;
        artwork.acsChecked = false;
        artwork.ogpChecked = false;
        artwork.perChecked = false;
        artwork.watChecked = false;
        artwork.draChecked = false;
        artwork.phoChecked = true;
      }
      break;
    }
  }
}
