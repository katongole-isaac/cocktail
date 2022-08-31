import { Link } from "react-router-dom";
const Error = ({ error }) => {
  return (
    <div className="row justify-content-center mt-4 vh-50">
      <div className="col-sm-8 mt-4 ">
        <div className="d-flex justify-content-center text-danger">
          {error} the cocktail
        </div>
      </div>
    </div>
  );
};

const SingleError = () => {
  const message = `Error occured in displaying the cocktail`;
  return (
    <div className="row justify-content-center mt-4 vh-50">
      <div className="col-sm-8 mt-4 ">
        <div className="d-flex justify-content-center text-danger">
          <p>{message}</p>
          <Link to="/">
            <button className="btn btn-sm btn-secondary ms-3">Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export { SingleError, Error };
