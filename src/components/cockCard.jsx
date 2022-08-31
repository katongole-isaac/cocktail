import { Link } from "react-router-dom";

const Card = ({ id, name, image, instructions, glass, measure }) => {
  return (
    <>
      <div
        className="card col-sm-4 border-light justify-self-center m-1"
        style={{ width: "16rem", height: "30rem" }}
      >
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{ width: "100%", margin: "0" }}
        />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{name}</h5>
            <h5 className="card-text  text-muted fs-6 text-secondary">
              {measure}
            </h5>
          </div>
          <p className="card-text">{instructions.substring(0, 80)}...</p>
          <Link to={`${id}`} className="btn  btn-sm btn-outline-primary">
            Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
