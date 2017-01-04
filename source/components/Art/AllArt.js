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
        <div className="allart-header" >
          <a href="#" className="allart-search" onClick={this.dropdown}>
            <h3>filter & search</h3>
            <div className={this.props.artwork.dropOn ? 'allart-button allart-button-open' : 'allart-button'}></div>
          </a>
          <a href="https://www.instagram.com/p/KVk_3HqAyu/" className="allart-world">
            <h1>the whole world + the work =</h1><span></span>
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
                <label htmlFor="recent" className="allart-label-sort check-recent">
                  <input type="checkbox" id="recent" value="recent" checked={recentChecked} onChange={this.toggleSorting} />
                   <span>most recent </span>
                </label>
                <label htmlFor="og" className="allart-label-sort check-og">
                  <input type="checkbox" id="og" value="og" checked={ogChecked} onChange={this.toggleSorting} />
                   <span>most og </span>
                </label>
                <label htmlFor="random" className="allart-label-sort check-random">
                  <input type="checkbox" id="random" value="random" checked={randomChecked} onChange={this.toggleSorting} />
                   <span>random </span>
                </label>
              </div>
            </div>
          </div>
          {/* Filter Options */}
          <div className="allart-filter">
            <div className="allart-filter-all">
              <p>filter by |</p>
              <label htmlFor="all" className="allart-label-sort check-all">
              <input type="checkbox" id="all" value="all" checked={allChecked} onChange={this.toggleFilters} />
                 <span>all </span>
              </label>
            </div>
            <div className="allart-filter-column">
              <label htmlFor="ach" className="allart-label-filter check-ach">
                <input type="checkbox" id="ach" value="ach" checked={achChecked} onChange={this.toggleFilters} />
                <span>a colorful history</span>
              </label>
              <label htmlFor="dcs" className="allart-label-filter check-dcs">
                <input type="checkbox" id="dcs" value="dcs" checked={dcsChecked} onChange={this.toggleFilters} />
                <span>digital city series</span>
              </label>
              <label htmlFor="bda" className="allart-label-filter check-bda">
                <input type="checkbox" id="bda" value="bda" checked={bdaChecked} onChange={this.toggleFilters} />
                <span>breaking down art</span>
              </label>
              <label htmlFor="vls" className="allart-label-filter check-vls">
                <input type="checkbox" id="vls" value="vls" checked={vlsChecked} onChange={this.toggleFilters} />
                <span>vanishing landscape series</span>
              </label>
              <label htmlFor="acs" className="allart-label-filter check-acs">
                <input type="checkbox" id="acs" value="acs" checked={acsChecked} onChange={this.toggleFilters} />
                <span>art collision</span>
              </label>
            </div>
            <div className="allart-filter-column">
              <label htmlFor="ogp" className="allart-label-filter check-ogp">
                <input type="checkbox" id="ogp" value="ogp" checked={ogpChecked} onChange={this.toggleFilters} />
                <span>og paintings</span>
              </label>
              <label htmlFor="per" className="allart-label-filter check-per">
                <input type="checkbox" id="per" value="per" checked={perChecked} onChange={this.toggleFilters} />
                <span>performance</span>
              </label>
              <label htmlFor="wat" className="allart-label-filter check-wat">
                <input type="checkbox" id="wat" value="wat" checked={watChecked} onChange={this.toggleFilters} />
                <span>watercolors</span>
              </label>
              <label htmlFor="dra" className="allart-label-filter check-dra">
                <input type="checkbox" id="dra" value="dra" checked={draChecked} onChange={this.toggleFilters} />
                <span>drawings</span>
              </label>
              <label htmlFor="pho" className="allart-label-filter check-pho">
                <input type="checkbox" id="pho" value="pho" checked={phoChecked} onChange={this.toggleFilters} />
                <span>photography</span>
              </label>
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
    if (artwork.dropOn == false) {
      artwork.filter = '';
    }
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
        artwork.allChecked = true;
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
        artwork.allChecked = true;
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
        artwork.allChecked = true;
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
        artwork.allChecked = true;
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
        artwork.allChecked = true;
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
        artwork.allChecked = true;
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
        artwork.allChecked = true;
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
        artwork.allChecked = true;
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
        artwork.allChecked = true;
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
        artwork.allChecked = true;
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
      break;
    }
  }
}
