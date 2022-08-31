import React, { useContext, useEffect, useState } from "react";

const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    const url = `${baseUrl}${searchTerm}`;
    try {
      const resp = await fetch(url);
      const { drinks } = await resp.json();
      if (drinks && drinks.length !== 0) {
        const newDrinks = drinks.map((item) => {
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
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            glass: strGlass,
            instructions: strInstructions,
            ingredient: [strIngredient1, strIngredient2, strIngredient3],
            measure: strMeasure1,
          };
        });

        setCocktails(newDrinks);
        setLoading(false);
        return;
      } else {
        setLoading(false);
        setCocktails([]);
        return;
      }
    } catch (ex) {
      setError(ex.message);
      setLoading(false);
      return;
    }
  };

  useEffect(() => {
    getData();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        setSearchTerm,
        searchTerm,
        cocktails,
        loading,
        setLoading,
        setCocktails,
        error,
      }}
    >
      {children};
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
