import React, { Component } from 'react';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <div className="form-search" />
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}
export default App;
