import React from 'react';

export default class Artwork extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <li className='artwork-item'>
          <a href={this.props.link} target="_blank">
          <img src={this.props.imageMedium} alt={this.props.title.rendered} />
          <div className="artwork-info-wrap">
            <div className={this.artworkColor()}></div>
            <div className="artwork-info">
              {this.artworkTitle()}
              <div className="artwork-details">{this.artworkDetails()}</div>
              <p className="artwork-year">{this.props.dateCreated}</p>
            </div>
          </div>
        </a>
      </li>
    );
  }

  artworkTitle = () => {
    if (this.props.series == 'dcs') {
      return <h2 className='artwork-dcs-city'>{this.props.name}<span className='artwork-dcs-country'> {this.props.contentLocation}</span></h2>;
    } else {
      if (this.props.contentLocation) {
        return <h2 className='artwork-title'>{this.props.title.rendered}<span className='artwork-location'> | {this.props.contentLocation}</span></h2>;
      } else {
        return <h2 className='artwork-title'>{this.props.title.rendered}</h2>;
      }
    }
  }

  artworkDetails = () => {
    // get the WIDTH and change inches if needed
    const rawWidth = this.props.width;
    let width = '';
    const widthLength = rawWidth.length;
    if (rawWidth.substring(widthLength - 6, widthLength) == 'inches') {
      width = rawWidth.slice(0, widthLength - 7) + '"';
    } else {
      width = rawWidth;
    }

    // get the HEIGHT and change inches if needed
    const rawHeight = this.props.height;
    let height = '';
    const heightLength = rawHeight.length;
    if (rawHeight.substring(heightLength - 6, heightLength) == 'inches') {
      height = rawHeight.slice(0, heightLength - 7) + '"';
    } else {
      height = rawHeight;
    }

    if (this.props.series == 'pho' || this.props.series == 'per') {
      return this.props.artform;
    } else {
      return width + ' x ' + height + ' | ' + this.props.artform;
    }
  }

  artworkMedium = () => {
    return this.props.artform;
  }

  artworkColor = () => {
    if (this.props.series == 'ach') {
      return 'artwork-color artwork-ach';
    } else if (this.props.series == 'dcs') {
      return 'artwork-color artwork-dcs';
    } else if (this.props.series == 'bda') {
      return 'artwork-color artwork-bda';
    } else if (this.props.series == 'vls') {
      return 'artwork-color artwork-vls';
    } else if (this.props.series == 'acs') {
      return 'artwork-color artwork-acs';
    } else if (this.props.series == 'ogp') {
      return 'artwork-color artwork-ogp';
    } else if (this.props.series == 'per') {
      return 'artwork-color artwork-per';
    } else if (this.props.series == 'wat') {
      return 'artwork-color artwork-wat';
    } else if (this.props.series == 'dra') {
      return 'artwork-color artwork-dra';
    } else if (this.props.series == 'pho') {
      return 'artwork-color artwork-pho';
    } else {
      return 'artwork-color';
    }
  };

}
