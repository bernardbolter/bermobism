import { action, observable  } from 'mobx';
import _ from 'lodash';

class artStore {
  @observable artwork = [];
  @observable isLoading = true;
  @observable sortedArt = [];

  loadArtwork() {
    this.isLoading = true;
    window.fetch('http://bolter.acolorfulhistory.com/wp-json/wp/v2/artwork?per_page=100')
    .then(results => results.json())
    .then(json => {
      console.log('the jason:', json);
      this.artwork = json;
      this.isLoading = false;
    });
  }

  // @action sort() {
  //   this.isLoading = true;
  //   return (
  //
  //     this.artwork = _.sortBy(this.artwork, ['slug']),
  //     this.isLoading = false
  //
  //   );
  //
  // }
}

export default new artStore();
