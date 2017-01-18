import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import InfoChimp from './InfoChimp';
import information from './infoStore';

import InfoBio from './InfoBio';

@observer
export default class Info extends React.Component {
  constructor(){
    super();
  }
  render() {
    const { bernardbolter,
            beginEmailAnimation,
            startRollover,
            endRollover,
            infoOpenDropdown,
            isInfoDropdown,
            toggleNavCV,
            toggleNavBio,
            toggleNavStatement } = this.props.info;

    return (
        <section className={this.props.info.isInfoDropdown ? 'info info-open' : 'info'} id="info-jump" ref="jump">

          {/*  INFO eMAIL SIGNUP  */}
          <div className={this.props.info.isInfoDropdown ? 'info-email info-email-open' : 'info-email'}
          onMouseEnter={startRollover}
          onMouseLeave={endRollover}
          onClick={beginEmailAnimation}
          >{bernardbolter}</div>
          <InfoChimp info={information} />

          {/*  INFO NAVIGATION  */}
          <nav className={this.props.info.isInfoDropdown ? 'info-nav info-nav-open' : 'info-nav'}>
            <a  href="#"
                className={this.props.info.toggleNavCV ? 'info-nav-cv info-nav-cv-open' : 'info-nav-cv'}
                onClick={infoOpenDropdown}
                id="info_cv">cv&nbsp;&nbsp;
            </a>
            <span>.</span>
            <a href="#"
               className={this.props.info.toggleNavBio ? 'info-nav-bio info-nav-bio-open' : 'info-nav-bio'}
               onClick={infoOpenDropdown}
               id="info_bio">&nbsp;&nbsp;bio&nbsp;&nbsp;</a>
            <span>.</span>
            <a href="#"
               className={this.props.info.toggleNavStatement ? 'info-nav-statement info-nav-statement-open' : 'info-nav-statement'}
               onClick={infoOpenDropdown}
               id="info_statement">&nbsp;&nbsp;statement&nbsp;&nbsp;</a>
            <span>.</span>
            <a href="https://vimeo.com/user4456819">&nbsp;&nbsp;videos</a>
          </nav>

          {/*  INFO DROPDOWN WITH CV, BIO, and STAEMENT  */}
          <div className={this.props.info.isInfoDropdown ? 'info-dropdown info-dropdown-open' : 'info-dropdown'}>
            <ReactCSSTransitionGroup transitionName="info-text" transitionEnterTimeout={1000} transitionLeaveTimeout={1}>
              <InfoBio />
            </ReactCSSTransitionGroup>
          </div>

        </section>
    );
  }
}
