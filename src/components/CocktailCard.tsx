import { Link } from "react-router-dom";
import type { Drink } from "../types/cocktails";

const CocktailCard = ({ drink }: { drink: Drink }) => {
  const { strDrinkThumb, strDrink, strAlcoholic, strGlass, idDrink } = drink;
  return (
    <div className="shadow transition-all grid grid-rows-[auto_1fr] rounded-md hover:shadow-lg">
      <img
        src={strDrinkThumb}
        alt={strDrink}
        className="h-60 rounded-t-md object-cover w-full block"
      />
      <div className="p-5">
        <h4 className="mb-1 text-3xl font-bold">{strDrink}</h4>
        <h5 className="mb-1 text-lg">{strGlass}</h5>
        <p className="mb-4 text-gray-500">{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default CocktailCard;
