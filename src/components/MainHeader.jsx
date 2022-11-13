import { Link } from "react-router-dom";
import image from "../images/main_header.png";

function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            magnam. Molestias facilis dolorem aspernatur est laudantium ut
            repudiandae? Placeat nam animi esse ipsa aliquid aspernatur
            assumenda fugit recusandae quasi sint.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={image} alt="strong guy exercising with a 8kg ball" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
