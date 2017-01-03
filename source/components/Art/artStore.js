import { autorun, action, computed, observable  } from 'mobx';
import _ from 'lodash';

class artStore {
  @observable artlist = [];
  @observable isLoading = true;
  @observable filter = '';
  @observable dropOn = false;

  @observable recentChecked = true;
  @observable ogChecked = false;
  @observable randomChecked = false;

  @observable allChecked = true;

  @observable achChecked = false;
  @observable dcsChecked = false;
  @observable bdaChecked = false;
  @observable vlsChecked = false;
  @observable acsChecked = false;

  @observable ogpChecked = false;
  @observable perChecked = false;
  @observable watChecked = false;
  @observable draChecked = false;
  @observable phoChecked = false;

  @computed get filteredArt() {
    const matchesFilter = new RegExp(this.filter, 'i');
    let artworkFiltered = this.artlist.filter(art => !this.filter || matchesFilter.test(art.title.rendered));
    let artworkSorted = [];
    let artworkSeries = [];

    if (this.ogChecked == true) {
      artworkSorted = artworkFiltered.reverse();
    } else if (this.randomChecked == true) {
      artworkSorted = _.shuffle(artworkFiltered);
    } else {
      artworkSorted = artworkFiltered;
    }
    if (this.allChecked == true) {
      artworkSeries = artworkSorted;
    } else if (this.achChecked == true) {
      artworkSeries = _.filter(artworkSorted, function(b) {
        return b.series === 'ach';
      });
    } else if (this.dcsChecked == true) {
      artworkSeries = _.filter(artworkSorted, function(b) {
        return b.series === 'dcs';
      });
    } else if (this.bdaChecked == true) {
      artworkSeries = _.filter(artworkSorted, function(b) {
        return b.series === 'bda';
      });
    } else if (this.vlsChecked == true) {
      artworkSeries = _.filter(artworkSorted, function(b) {
        return b.series === 'vls';
      });
    } else if (this.acsChecked == true) {
      artworkSeries = _.filter(artworkSorted, function(b) {
        return b.series === 'acs';
      });
    } else if (this.ogpChecked == true) {
      artworkSeries = _.filter(artworkSorted, function(b) {
        return b.series === 'ogp';
      });
    } else if (this.perChecked == true) {
      artworkSeries = _.filter(artworkSorted, function(b) {
        return b.series === 'per';
      });
    } else if (this.watChecked == true) {
      artworkSeries = _.filter(artworkSorted, function(b) {
        return b.series === 'wat';
      });
    } else if (this.draChecked == true) {
      artworkSeries = _.filter(artworkSorted, function(b) {
        return b.series === 'dra';
      });
    } else if (this.phoChecked == true) {
      artworkSeries = _.filter(artworkSorted, function(b) {
        return b.series === 'pho';
      });
    } else {
      artworkSeries = artworkSorted;
    }

    return artworkSeries;
  }

  @action loadArtwork() {
    this.isLoading = true;
    window.fetch('http://bolter.acolorfulhistory.com/wp-json/wp/v2/artwork?per_page=100')
    .then(results => results.json())
    .then(json => {
      console.log('the jason:', json);
      this.artlist = json;
      this.isLoading = false;
    });
  }
}

var artwork = window.artwork = new artStore;

export default artwork;

autorun(() => {
  console.log('artilst:', artwork.artlist);
  console.log('loading..', artwork.isLoading);
  console.log('filter', artwork.filter);
});
