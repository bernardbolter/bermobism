import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Info extends React.Component {
  constructor(){
    super();
  }
  render() {
    const { bernardbolter, beginEmailAnimation, endEmailAnimation } = this.props.info;
    return (
        <section className="info">
          <div className="info-email"
          onMouseEnter={beginEmailAnimation}
          onMouseLeave={endEmailAnimation}
          >
            {bernardbolter}
          </div>
          <nav className="info-nav">
            <a href="#">cv&nbsp;&nbsp;.&nbsp;&nbsp;</a>
            <a href="#">bio&nbsp;&nbsp;.&nbsp;&nbsp;</a>
            <a href="#">statement&nbsp;&nbsp;.&nbsp;&nbsp;</a>
            <a href="https://vimeo.com/user4456819">videos</a>
          </nav>
        </section>
    );
  }
}
