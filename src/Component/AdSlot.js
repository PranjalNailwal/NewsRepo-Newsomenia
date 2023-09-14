import React, { Component } from 'react';

class AdSlot extends Component {
  componentDidMount() {
    // Load the ad script when the component mounts
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5638253240184136";
    script.crossOrigin = "anonymous"; // Set crossorigin attribute
    document.head.appendChild(script);
  }

  render() {
    return <div id="ad-container"></div>;
  }
}

export default AdSlot;
