import { Link, useParams } from "react-router-dom";
import type { Drink } from "../types/cocktails";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getSingleCocktail } from "../api/cocktails";

const Cocktail = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useSuspenseQuery({
    queryKey: ["cocktail", id],
    queryFn: async () => await getSingleCocktail(id as string),
  });

  const drink = data as Drink;

  const ingredients: string[] = [];
  for (const [key, value] of Object.entries(drink)) {
    if (key.includes("strIngredient")) {
      if (value) ingredients.push(value);
    }
  }
  const drinkInfoStyle = "font-bold capitalize leading-4 mb-4";
  const drinkDataStyle =
    "bg-teal-300 py-1 px-0.5 text-teal-700 rounded tracking-wide inline-block";

  return (
    <>
      <header className="text-center mb-10">
        <Link to="/" className="btn mb-4 inline-block">
          back home
        </Link>
        <h3 className="text-4xl">{drink.strDrink}</h3>
      </header>
      <div className="sm:grid sm:grid-cols-2 sm:gap-10 sm:items-center">
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="rounded-xl object-cover w-full block"
        />
        <div className="pt-8">
          <p className={drinkInfoStyle}>
            <span className={drinkDataStyle}>name:</span> {drink.strDrink}
          </p>
          <p className={drinkInfoStyle}>
            <span className={drinkDataStyle}>category:</span>{" "}
            {drink.strCategory}
          </p>
          <p className={drinkInfoStyle}>
            <span className={drinkDataStyle}>info:</span> {drink.strAlcoholic}
          </p>
          <p className={drinkInfoStyle}>
            <span className={drinkDataStyle}>glass:</span> {drink.strGlass}
          </p>
          <p className={drinkInfoStyle}>
            <span className={drinkDataStyle}>ingredients: </span>{" "}
            {ingredients.join(", ")}
          </p>
          <p className={drinkInfoStyle}>
            <span className={`${drinkDataStyle} mb-2`}>instructions: </span>{" "}
            {drink.strInstructions}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cocktail;
