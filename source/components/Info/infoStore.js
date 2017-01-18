import { autorun, action, observable  } from 'mobx';
import jump from 'jump.js';

class infoStore {
  @observable bernardbolter = 'b [ at symbol ] bernardbolter.com';
  @observable isInfoRollover = true;
  @observable formInput = '';
  @observable showSignup = false;
  @observable isInfoDropdown = false;
  @observable startInfoDropdownHeight = '';
  @observable toggleNavCV = false;
  @observable toggleNavBio = false;
  @observable toggleNavStatement = false;
  @observable toggleState = '';

  @action startRollover = () => {
    this.bernardbolter = this.bernardbolter.replace('at symbol', 'email');
  }

  @action endRollover = () => {
    if (this.isInfoRollover == true) {
      this.bernardbolter = 'b [ at symbol ] bernardbolter.com';
    }
  }

  @action beginEmailAnimation = () => {
    if (this.showSignup == false) {
      this.isInfoRollover = false;
      let long = this.bernardbolter.length;
      this.replaceText(this.bernardbolter, 0, long);
    } else {
      this.closeSignup();
    }
  }

  @action replaceText = (text, i, n) => {
    if(i < (text.length)) {
      this.bernardbolter = text.substring(0, n - 1);
      i++;
      n--;
      setTimeout(() => {
        this.replaceText(text, i, n);
      }, 40 );
    } else {
      this.bernardbolter = 'join [ email ] list -->';
      this.textAppear(this.bernardbolter, 0);
    }
  }

  @action textAppear = (text, i) => {
    if(i < (text.length)) {
      this.bernardbolter = text.substring(0, i + 1);
      i++;
      setTimeout(() => {
        this.textAppear(text, i);
      }, 70 );
    } else {
      this.showSignup = true;
    }
  }

  @action closeSignup = () => {
    this.bernardbolter = 'b [ at symbol ] bernardbolter.com';
    this.showSignup = false;
    this.isInfoRollover = true;
  }

  @action infoOpenDropdown = (e) => {
    e.preventDefault();
    console.log('value: ', e.currentTarget.id);
    if (this.isInfoDropdown == false) {
      this.startInfoDropdownHeight = Math.round(e.currentTarget.getBoundingClientRect().top);
      console.log(this.startInfoDropdownHeight);
      jump('#info-jump');
    } else {
      let currentOffset = Math.round(e.currentTarget.getBoundingClientRect().top);
      console.log(currentOffset);
      if (currentOffset == 51) {
        jump(-this.startInfoDropdownHeight);
      }
    }

    if (e.currentTarget.id == 'info_cv' && this.toggleState !== 'cv') {
      this.toggleNavCV = true;
      this.toggleNavBio = false;
      this.toggleNavStatement = false;
      this.toggleState = 'cv';
      this.isInfoDropdown = true;
    } else if (e.currentTarget.id == 'info_bio' && this.toggleState !== 'bio') {
      this.toggleNavCV = false;
      this.toggleNavBio = true;
      this.toggleNavStatement = false;
      this.toggleState = 'bio';
      this.isInfoDropdown = true;
    } else if (e.currentTarget.id == 'info_statement' && this.toggleState !== 'statement') {
      this.toggleNavCV = false;
      this.toggleNavBio = false;
      this.toggleNavStatement = true;
      this.toggleState = 'statement';
      this.isInfoDropdown = true;
    } else {
      this.toggleNavCV = false;
      this.toggleNavBio = false;
      this.toggleNavStatement = false;
      this.isInfoDropdown = false;
      this.toggleState = '';
    }
  }
}

var information = new infoStore;

export default information;
