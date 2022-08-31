import { useGlobalContext } from "../content";
import { useEffect } from "react";

const Input = () => {
  const { setLoading, searchTerm, setSearchTerm } = useGlobalContext();

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Enter the name of your favorite cocktail"
        onChange={(e) => {
          setLoading(true);
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
