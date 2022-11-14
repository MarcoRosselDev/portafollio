import { Link } from "react-router-dom";
import image from "../images/homeImage.jpg";

function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#Portfollio</h4>
          <h1>Marco Rossel</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione ea
            cumque consectetur velit a, nulla provident quam deleniti,
            recusandae nesciunt dolorum repellat quod nam perspiciatis dolorem
            necessitatibus aperiam corrupti! Autem.
          </p>
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
