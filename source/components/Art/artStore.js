import { autorun, action, computed, observable  } from 'mobx';
import _ from 'lodash';

class artStore {
  @observable artlist = [];
  @observable isLoading = true;
  @observable filter = '';

  @observable recentChecked = true;
  @observable ogChecked = false;
  @observable randomChecked = false;

  @observable achChecked = false;
  @observable dcsChecked = false;
  @observable bdaChecked = false;
  @observable vlsChecked = false;

  @observable acsChecked = false;
  @observable ogpChecked = false;
  @observable perChecked = false;
  @observable watChecked = false;

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

    return artworkSorted;
      // var ogFiltered = _.filter(artworkFiltered, function(data) {
      //   if(data.series == 'bda' || data.series == 'ach') return data;
      // });
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
