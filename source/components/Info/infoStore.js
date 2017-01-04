import { autorun, action, computed, observable  } from 'mobx';

class infoStore {
  @observable bernardbolter = 'b [ at symbol ] bernardbolter.com';

  @action beginEmailAnimation = () => {
    this.replaceText(this.bernardbolter, 0, 32);
  }

  @action endEmailAnimation = () => {
    this.bernardbolter = 'b [ at symbol ] bernardbolter.com';
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
    }
  }
}

var information = window.information = new infoStore;

export default information;
