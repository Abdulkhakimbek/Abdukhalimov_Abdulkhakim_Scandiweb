import React from "react";

import Broken_Mug_serverImg from "../../assets/images/Broken_Mug_serverImg.webp";
import "./ServerError.scss";

class ServerErrorPage extends React.Component {
  render() {
    return (
      <div id="internal-server-error">
        <div
          className="image"
          style={{ backgroundImage: `url('${Broken_Mug_serverImg}')` }}
        />
        <h1>Our server is broken!</h1>
        <p>
          This mug was a family heirloom. Of your neighbor.
          Your neighbor always loved the color, shape, and quantity of coffee held by this mug.
          But your neighbor moved out and left it on their porch,
          no explanation, no repair materials, no nothing. So you have this broken mug.
        </p>
      </div>
    );
  }
}

export default ServerErrorPage;
