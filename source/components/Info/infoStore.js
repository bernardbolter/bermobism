import { autorun, action, computed, observable  } from 'mobx';

class infoStore {
  @observable bernardbolter = 'b [ at symbol ] bernardbolter.com';
  @observable isRollover = true;
  @observable formInput = '';
  @observable showSignup = false;

  @action startRollover = () => {
    this.bernardbolter = this.bernardbolter.replace('at symbol', 'email');
  }

  @action endRollover = () => {
    if (this.isRollover == true) {
      this.bernardbolter = 'b [ at symbol ] bernardbolter.com';
    }
  }

  @action beginEmailAnimation = () => {
    if (this.showSignup == false) {
      this.isRollover = false;
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
    this.isRollover = true;
  }
}

var information = new infoStore;

export default information;
