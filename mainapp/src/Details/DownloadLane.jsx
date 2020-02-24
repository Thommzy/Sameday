import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class DownloadLane extends Component {
  render() {
    return (
      <div className="overallDownload">
        <Menu secondary>
          <div className="productDownload">Product</div>
          <Menu.Menu position="right">
            <div className="downloadArtwork">Download Artwork</div>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default DownloadLane;
