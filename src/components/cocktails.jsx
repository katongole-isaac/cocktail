import { useEffect } from "react";
import { useGlobalContext } from "../content";
import Card from "./cockCard";
import { Error } from "./Error";
import Loading from "./Loading";

const Cocktails = () => {
  const { loading, cocktails, error, setSearchTerm, setLoading } =
    useGlobalContext();

  const refresh = () => {
    // const search = "refreshing";
    // const index = Math.floor(Math.random() * search.length);
    // setSearchTerm(search[index]);
    // return;
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (cocktails.length === 0) {
    return (
      <div className="row justify-content-center mt-4">
        <div className="col-sm-6 justify-self-center">
          <p className="text-center text-muted">
            No cocktail for the search term
          </p>
        </div>
      </div>
    );
  }
  if (cocktails.length !== 0) {
    return (
      <div className="row justify-content-center mt-4 p-2">
        <h2 className="text-center "> cocktails </h2>
        {cocktails.map((cocktail) => {
          return <Card key={cocktail.id} {...cocktail} />;
        })}
      </div>
    );
  }
};

export default Cocktails;
