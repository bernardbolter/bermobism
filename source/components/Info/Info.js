import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import InfoChimp from './InfoChimp';
import information from './infoStore';

import InfoCV from './InfoCV';
import InfoBio from './InfoBio';
import InfoStatement from './InfoStatement';

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
            toggleNavStatement,
            closeInfo } = this.props.info;

    return (
        <section className="info" id="info-jump" ref="jump">

          <div className="info-wrapper">
          {/*  INFO eMAIL SIGNUP  */}
          <div className="info-email"
            onMouseEnter={startRollover}
            onMouseLeave={endRollover}
            onClick={beginEmailAnimation}
            >{bernardbolter}</div>
          <InfoChimp info={information} />

          {/*  INFO NAVIGATION  */}
          <nav className="info-nav">
            <a  className={toggleNavCV ? 'info-nav-cv info-nav-cv-open' : 'info-nav-cv'}
                onClick={infoOpenDropdown}
                id="info_cv">cv&nbsp;&nbsp;
            </a>
            <span>.</span>
            <a className={toggleNavBio ? 'info-nav-bio info-nav-bio-open' : 'info-nav-bio'}
               onClick={infoOpenDropdown}
               id="info_bio">&nbsp;&nbsp;bio&nbsp;&nbsp;</a>
            <span>.</span>
            <a className={toggleNavStatement ? 'info-nav-statement info-nav-statement-open' : 'info-nav-statement'}
               onClick={infoOpenDropdown}
               id="info_statement">&nbsp;&nbsp;statement&nbsp;&nbsp;</a>
            <span>.</span>
            <a href="https://vimeo.com/user4456819">&nbsp;&nbsp;videos</a>
          </nav>

          </div> {/*  END info-wrapper  */}

          {/*  INFO DROPDOWN WITH CV, BIO, and STAEMENT  */}
          <div className={isInfoDropdown ? 'info-dropdown info-dropdown-open' : 'info-dropdown'}>
            <a className="info-close" onClick={closeInfo}></a>
            <ReactCSSTransitionGroup transitionName="showInfo" transitionAppear={true} transitionAppearTimeout={20000} transitionEnter={true} transitionLeave={true} transitionEnterTimeout={3000} transitionLeaveTimeout={3000}>
              {this.injectInfo()}
            </ReactCSSTransitionGroup>
          </div>

        </section>
    );
  }
  injectInfo = () => {
    if (this.props.info.toggleNavCV) {
      return (
        <InfoCV />
      );
    } else if (this.props.info.toggleNavBio) {
      return (
        <InfoBio />
      );
    } else if (this.props.info.toggleNavStatement) {
      return (
        <InfoStatement />
      );
    }
  }
}
