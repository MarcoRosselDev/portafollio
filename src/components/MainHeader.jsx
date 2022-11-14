import { Link } from "react-router-dom";
import image from "../images/main_header.png";

function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#Portfollio</h4>
          <h1>Marco Rossel</h1>
          <p>Hi i'm autodidact programer from chile</p>
          <Link to="/plans" className="btn lg">
            Projects
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
