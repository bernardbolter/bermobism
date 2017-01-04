import React, { Component } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classNames';

export default class Portal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      // controls the hover of the big letters
      lettersHover: false,
      historyHover: false,
      historyLight: false,
      travelHover: false,
      travelLight: false,
      pullupHover: false,
      pullupLight: false,
      smoothHover: false,
      smoothLight: false
    };
  }

  lettersHover(text, e) {
    e.preventDefault();
    this.setState({ lettersHover: true });
    if (text === 'history') {
      this.setState({ historyHover: true });
      this.setState({ historyLight: true });
    }
    else if (text === 'travel') {
      this.setState({ travelHover: true });
      this.setState({ travelLight: true });
    }
    else if (text === 'pullup') {
      this.setState({ pullupHover: true });
      this.setState({ pullupLight: true });
    }
    else if (text === 'smooth') {
      this.setState({ smoothHover: true });
      this.setState({ smoothLight: true });
    }
    else {
      null;
    }
  }

  lettersHoverOut(text, e) {
    e.preventDefault();
    this.setState({lettersHover: false });
    if (text === 'history') {
      this.setState({ historyHover: false });
      this.setState({ historyLight: false });
    }
    else if (text === 'travel') {
      this.setState({ travelHover: false });
      this.setState({ travelLight: false });
    }
    else if (text === 'pullup') {
      this.setState({ pullupHover: false });
      this.setState({ pullupLight: false });
    }
    else if (text === 'smooth') {
      this.setState({ smoothHover: false });
      this.setState({ smoothLight: false });
    }
    else {
      null;
    }
  }

  render() {

    var lettersHoverClass = classNames({
      'portal__letters--hover': this.state.lettersHover
    });

    var historyHover = classNames({
      'portal__history' : true,
      'portal__history--hover': this.state.historyHover
    });

    var historyLight = classNames({
      'portal__history--light-': this.state.historyLight
    });

    var travelHover = classNames({
      'portal__travel' : true,
      'portal__travel--hover': this.state.travelHover
    });

    var travelLight = classNames({
      'portal__travel--light-': this.state.travelLight
    });

    var pullupHover = classNames({
      'portal__pullup' : true,
      'portal__pullup--hover': this.state.pullupHover
    });

    var pullupLight = classNames({
      'portal__pullup--light-': this.state.pullupLight
    });

    var smoothHover = classNames({
      'portal__smooth' : true,
      'portal__smooth--hover': this.state.smoothHover
    });

    var smoothLight = classNames({
      'portal__smooth--light-': this.state.smoothLight
    });

    return (
    <section className="portal">
      <div className="max-width">
        <div className="portal__letters">
          <span className={'portal__title ' + lettersHoverClass}>THE<span className="portal__title--light-1">WEB</span><span className="portal__title--light-2">PORTAL</span></span>
          <span className={'portal__aka ' + lettersHoverClass}>OF</span>
          <span className={'portal__bernard ' + lettersHoverClass}>BERNARD<span className="portal__bernard--light-1">JOHN</span><span className="portal__bernard--light-2">BOLTER</span><span className="portal__bernard--light-3">IV</span></span>
          <span className={'portal__aka '  + lettersHoverClass}>AKA</span>
          <a className={historyHover + ' ' + lettersHoverClass}
              onMouseEnter={this.lettersHover.bind(this, 'history')}
              onMouseLeave={this.lettersHoverOut.bind(this, 'history')}
              href="http://acolorfulhistory.com/">
              THE<span className={'portal__history--light ' + historyLight +'1'}>HISTORICAL</span><span className={'portal__history--light ' + historyLight +'2'}>COLORIST</span>
          </a>
          <span className={'portal__aka '  + lettersHoverClass}>AKA</span>
          <a className={travelHover + ' ' + lettersHoverClass}
            onMouseEnter={this.lettersHover.bind(this, 'travel')}
            onMouseLeave={this.lettersHoverOut.bind(this, 'travel')}
            href="http://www.digitalcityseries.com/">
            THE<span className={'portal__travel--light ' + travelLight +'1'}>TRAVELER</span>
          </a>
          <span className={'portal__aka '  + lettersHoverClass}>AKA</span>
          <a className={pullupHover + ' ' + lettersHoverClass}
            onMouseEnter={this.lettersHover.bind(this, 'pullup')}
            onMouseLeave={this.lettersHoverOut.bind(this, 'pullup')}
            href="http://www.pullupgallery.org/">
            THE<span className={'portal__pullup--light ' + pullupLight +'1'}>PULLUP</span><span className={'portal__pullup--light ' + pullupLight +'2'}>MAN</span>
          </a>
          <span className={'portal__aka '  + lettersHoverClass}>AKA</span>
          <a className={smoothHover + ' ' + lettersHoverClass}
            onMouseEnter={this.lettersHover.bind(this, 'smooth')}
            onMouseLeave={this.lettersHoverOut.bind(this, 'smooth')}
            href="http://www.smoothism.com/">
            THE<span className={'portal__smooth--light ' + smoothLight +'1'}>SMOOTHIST</span><span className={'portal__smooth--light ' + smoothLight +'2'}>CUBIST</span>
          </a>
        </div>
        <div className="portal__name-links">
          <div className="portal__name">
            <p>Bernard</p>
            <p>John</p>
            <p>Bolter</p>
            <p>IV</p>
          </div>
          <div className="portal__links">
            <a className="portal__links--color" href="http://acolorfulhistory.com/">acolorfulhistory.com
              <svg className='portal__links--color-arrow' viewBox='0 0 512 512' preserveAspectRatio='xMinYMin meet'>
                  <use xlinkHref='../svgs/defs.svg#svg-link' />
              </svg>
            </a>
            <a className="portal__links--dcs" href="http://www.digitalcityseries.com/">digitalcityseries.com
              <svg className='portal__links--travel-arrow' viewBox='0 0 512 512' preserveAspectRatio='xMinYMin meet'>
                  <use xlinkHref='../svgs/defs.svg#svg-link' />
              </svg>
            </a>
            <a className="portal__links--pullup" href="http://www.pullupgallery.org/">pullupgallery.org
              <svg className='portal__links--pullup-arrow' viewBox='0 0 512 512' preserveAspectRatio='xMinYMin meet'>
                  <use xlinkHref='../svgs/defs.svg#svg-link' />
              </svg>
            </a>
            <a className="portal__links--smooth" href="http://www.smoothism.com/">smoothism.com
            <svg className='portal__links--smooth-arrow' viewBox='0 0 512 512' preserveAspectRatio='xMinYMin meet'>
                <use xlinkHref='../svgs/defs.svg#svg-link' />
            </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
