import React, { Component } from 'react';
import { observer } from 'mobx-react';

import InfoChimp from './InfoChimp';
import information from './infoStore';

@observer
export default class Info extends React.Component {
  constructor(){
    super();
  }
  render() {
    const { bernardbolter,
            beginEmailAnimation,
            startRollover,
            endRollover } = this.props.info;
    return (
        <section className="info">

          {/*  INFO eMAIL SIGNUP  */}
          <div className="info-email"
          onMouseEnter={startRollover}
          onMouseLeave={endRollover}
          onClick={beginEmailAnimation}
          >{bernardbolter}</div>
          <InfoChimp info={information} />

          {/*  INFO NAVIGATION  */}
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
