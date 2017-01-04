import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class InfoChimp extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { formInput, showSignup, closeSignup } = this.props.info;
    return (
      <div id="mc_embed_signup" className={showSignup ? 'mc-embed mc-embed-open' : 'mc-embed'}>
      <form action="//bernardbolter.us14.list-manage.com/subscribe/post?u=3af6bd237013357640d06efd0&amp;id=1fbf4bd964" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
          <input type="email" value={formInput} onChange={this.formInput} name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
          {console.log('input:', formInput)}
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div id="mc-hidden-flield"><input type="text" name="b_3af6bd237013357640d06efd0_1fbf4bd964" tabIndex="-1" value="" /></div>
          <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" onClick={closeSignup} /></div>
          </div>
      </form>
      </div>
    );
  }
  formInput = (e) => {
    this.props.info.formInput = e.target.value;
  }
}
