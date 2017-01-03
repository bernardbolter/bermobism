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
            allChecked,
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
        <div className={this.props.artwork.dropOn ? 'allart-dropdown allart-dropdown-open' : 'allart-dropdown'}>
          {/* Search and Sorting Options */}
          <div className="allart-sort">
            <input className="filter" type="text" value={filter} onChange={this.filter} />
            <div className="allart-sort-below">
            <p>sort by |</p>
              <div className="allart-sort-column">
                <div className="allart-label">
                  <label htmlFor="recent">most recent </label>
                  <input type="checkbox" id="recent" value="recent" checked={recentChecked} onChange={this.toggleSorting} />
                </div>
                <div className="allart-label">
                  <label htmlFor="og">most og </label>
                  <input type="checkbox" id="og" value="og" checked={ogChecked} onChange={this.toggleSorting} />
                </div>
                <div className="allart-label">
                  <label htmlFor="random">random </label>
                  <input type="checkbox" id="random" value="random" checked={randomChecked} onChange={this.toggleSorting} />
                </div>
              </div>
            </div>
          </div>
          {/* Filter Options */}
          <div className="allart-filter">
            <div className="allart-filter-all">
              <p>filter by |</p>
              <div className="allart-label-all">
                <label htmlFor="ach">all </label>
                <input type="checkbox" id="all" value="all" checked={allChecked} onChange={this.toggleFilters} />
              </div>
            </div>
            <div className="allart-filter-column">
              <div className="allart-label-filter">
                <input type="checkbox" id="ach" value="ach" checked={achChecked} onChange={this.toggleFilters} />
                <label htmlFor="ach">a colorful history </label>
              </div>
              <div className="allart-label-filter">
                <input type="checkbox" id="dcs" value="dcs" checked={dcsChecked} onChange={this.toggleFilters} />
                <label htmlFor="dcs">digital city series </label>
              </div>
              <div className="allart-label-filter">
                <input type="checkbox" id="bda" value="bda" checked={bdaChecked} onChange={this.toggleFilters} />
                <label htmlFor="bda">breaking down art </label>
              </div>
              <div className="allart-label-filter">
                <input type="checkbox" id="vls" value="vls" checked={vlsChecked} onChange={this.toggleFilters} />
                <label htmlFor="vls">vanishing landscapes </label>
              </div>
              <div className="allart-label-filter">
                <input type="checkbox" id="acs" value="acs" checked={acsChecked} onChange={this.toggleFilters} />
                <label htmlFor="acs">art collision </label>
              </div>
            </div>
            <div className="allart-filter-column">
              <div className="allart-label-filter">
                <input type="checkbox" id="ogp" value="ogp" checked={ogpChecked} onChange={this.toggleFilters} />
                <label htmlFor="ogp">og paintings </label>
              </div>
              <div className="allart-label-filter">
                <input type="checkbox" id="per" value="per" checked={perChecked} onChange={this.toggleFilters} />
                <label htmlFor="per">performances </label>
              </div>
              <div className="allart-label-filter">
                <input type="checkbox" id="wat" value="wat" checked={watChecked} onChange={this.toggleFilters} />
                <label htmlFor="wat">watercolors </label>
              </div>
              <div className="allart-label-filter">
                <input type="checkbox" id="dra" value="dra" checked={draChecked} onChange={this.toggleFilters} />
                <label htmlFor="dra">drawing </label>
              </div>
              <div className="allart-label-filter">
                <input type="checkbox" id="pho" value="pho" checked={phoChecked} onChange={this.toggleFilters} />
                <label htmlFor="pho">photography </label>
              </div>
            </div>
          </div>
        </div>

        {/* Artwork Gallery Section */}
        <div className={this.props.artwork.dropOn ? 'allart-gallery allart-gallery-open' : 'allart-gallery'}>
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
        artwork.allChecked = false;
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
        artwork.allChecked = false;
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
        artwork.allChecked = false;
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
        artwork.allChecked = false;
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
        artwork.allChecked = false;
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
        artwork.allChecked = false;
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
        artwork.allChecked = false;
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
        artwork.allChecked = false;
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
        artwork.allChecked = false;
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
        artwork.allChecked = false;
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
    case 'all':
      if (artwork.allChecked == true) {
        artwork.allChecked = false;
      } else {
        artwork.allChecked = true;
        artwork.achChecked = false;
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
    }
  }
}
