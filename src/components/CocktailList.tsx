import { useSuspenseQuery } from "@tanstack/react-query";
import { getCocktails } from "../api/cocktails";
import useGlobalContext from "../globalContext";

import CocktailCard from "./CocktailCard";

const CocktailList = () => {
  const { searchTerm } = useGlobalContext();

  const { isError, data } = useSuspenseQuery({
    queryKey: ["cocktails", searchTerm],
    queryFn: async () => await getCocktails(searchTerm),
  });

  if (isError) {
    return <h3 className="text-center text-3xl">There was an error</h3>;
  }

  return (
    <div className="grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-8">
      {data.map((drink) => {
        return <CocktailCard key={drink.idDrink} drink={drink} />;
      })}
    </div>
  );
};

export default CocktailList;
