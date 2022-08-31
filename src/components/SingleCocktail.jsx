import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../content";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import "../style.css";
import { SingleError } from "./Error";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { productId } = useParams();
  const { setLoading, loading } = useGlobalContext();
  const [cocktail, setCocktail] = useState({});
  const [error, setError] = useState("");

  const fetchCocktail = async () => {
    const url = `${baseUrl}${productId}`;
    try {
      setLoading(true);
      const resp = await fetch(url);
      const { drinks } = await resp.json();
      const {
        strDrink,
        idDrink,
        strGlass,
        strInstructions,
        strDrinkThumb,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strMeasure1,
      } = drinks[0];

      setCocktail({
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        glass: strGlass,
        instructions: strInstructions,
        ingredient: [strIngredient1, strIngredient2, strIngredient3],
        measure: strMeasure1,
      });
      setLoading(false);
      return;
    } catch (ex) {
      setError(ex.message);
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    fetchCocktail();
  }, [productId]);

  if (loading) return <Loading />;

  if (error) return <SingleError error={error} />;

  if (Object.keys(cocktail).length !== 0) {
    const { id, name, image, glass, instructions, measure, ingredient } =
      cocktail;
    return (
      <div className="row justify-content-center mt-4 p-2 singleCocktail ">
        <div className="col-sm-8 mt-4 justify-self-center">
          <div
            className="card mb-3 border-0"
            style={{ width: "80%", height: "100%" }}
          >
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  src={image}
                  className="img-fluid rounded-start"
                  alt={name}
                  style={{ height: "90%", width: "100%" }}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <p className="card-text">
                    <span className="border rounded p-1 border-success text-success me-2">
                      Name
                    </span>
                    {name}
                  </p>
                  <p className="card-text">
                    <span className="border rounded p-1 border-success text-success  me-2">
                      Glass
                    </span>
                    {glass}
                  </p>
                  <p className="card-text mt-1">
                    <span className="border rounded p-1 border-success text-success  me-2">
                      Ingredient
                    </span>
                    {ingredient}
                  </p>
                  <p className="card-text">
                    <span className="border rounded p-1 border-success text-success me-2">
                      Instructions
                    </span>
                    {instructions}
                  </p>
                  {measure ? (
                    <p className="card-text">
                      <span className="border rounded p-1 border-success text-success me-2">
                        Measure
                      </span>
                      {measure}
                    </p>
                  ) : (
                    ""
                  )}
                  <Link to="/">
                    <button className="btn btn-sm btn-secondary">
                      Back Home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleCocktail;
