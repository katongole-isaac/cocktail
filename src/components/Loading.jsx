import CircularProgress from "@mui/material/CircularProgress";
const Loading = () => {
  return (
    <div className="row justify-content-center mt-4 vh-50">
      <div className="col-sm-8 mt-4 ">
        <div className="d-flex justify-content-center">
          <CircularProgress />
        </div>
      </div>
    </div>
  );
};

export default Loading;
