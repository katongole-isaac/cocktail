import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light row justify-content-center"
      style={{ height: "80px", margin: "0px", padding: "0px" }}
    >
      <div className="col-sm-8 justify-content-center">
        <div className="d-flex justify-content-between">
          <Link to={`/`} className="link">
            <h4>COCKTAILDB</h4>
          </Link>
          <div>
            <Link to={`/`} className="m-2 link">
              <Button variant="outlined">Home</Button>
            </Link>
            <Link to={`about`} className="m-2 link">
              <Button variant="outlined">About</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
