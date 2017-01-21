import React, { Component } from 'react';

export default class InfoBio extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="info-bio">
        <div className="info-bio-row">
          <p className="info-bio-comment">"Just trying to figure it all out."</p>
          <p className="info-bio-main">Bernard is a contemporary American artist --------- He works primarily between the mediums of paint and photography.</p>
        </div>
        <div className="info-bio-row">
          <p className="info-bio-comment">"Roll the streets,<br />show the streets"</p>
          <p className="info-bio-main">Bernard is a Cityscape artist --------- From growing up skating in the streets to traveling international streets, cities have been his inspiration and material.</p>
        </div>
        <div className="info-bio-row">
          <p className="info-bio-comment">"I call it Frisco"</p>
          <p className="info-bio-main">Bernard is a San Francisco artist --------- He has gone on to attend art school in the Netherlands, co-found a non-profit traveling arts organization in Brooklyn, and collaborated with artists in China, but came back to learn again what it means to be from San francisco.</p>
        </div>
      </section>
    );
  }
}
