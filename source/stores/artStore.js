import { observable  } from 'mobx';

class artStore {
  @observable artwork = [];
  @observable isLoading = true;
  @observable all = [
    { id: 1, title: 'Beginings', src: '../../source/images/Begining.jpg' },
    { id: 2, title: 'Canvas', src: '../../source/images/Canvas.jpg' },
    { id: 3, title: 'Education', src: '../../source/images/Education.jpg' },
  ]

  constructor() {
    this.artwork = [];
  }

  loadArtwork() {
    this.isLoading = true;
    window.fetch('http://bolter.acolorfulhistory.com/wp-json/wp/v2/artwork?per_page=100')
    .then(results => results.json())
    .then(json => {
      console.log('the jason:', json);
      this.artwork = json;
      this.isLoading = false;
      console.log('this artwork 1:', this.artwork);
      const theArt = this.artwork;
      console.log('the artwork 1:', theArt);
      return theArt;
    });


    // axios.get('http://bolter.acolorfulhistory.com/wp-json/wp/v2/artwork')
    // .then(result => {
    //   console.log(result);
    //   this.setState({ artwork: result.data });
    //   console.log(this.state.artwork);
    // });
  }
}

export default new artStore()
