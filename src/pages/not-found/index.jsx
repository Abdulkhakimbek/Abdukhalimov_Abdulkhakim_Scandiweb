import React from "react";
import { Link } from "react-router-dom";

import Astronaut_notFoundImg from "../../assets/images/Astronaut_notFoundImg.webp";
import "./NotFound.scss";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div id="not-found-page">
        <div
          className="image"
          style={{ backgroundImage: `url('${Astronaut_notFoundImg}')` }}
        />
        <h1>This Page is Lost in Space</h1>
        <p>
          You thought this mission to the moon would be a quick six month thing.
          Your neighbor offered to look after your dog. Your high school math teacher was impressed.
          He once said you wouldn’t amount to anything.You sure showed him. But now here you are,
          fifty feet from your spaceship with no way to get back.
          Your dog will be so sad. Your math teacher will be so smug. Pretty devastating.
        </p>
        <Link to="/">go back home</Link>
      </div>
    );
  }
}

export default NotFoundPage;
