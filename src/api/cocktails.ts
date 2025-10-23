import axios from "axios";
import type { Drink } from "../types/cocktails";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const cocktailLookupUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const getCocktails = async (searchTerm: string): Promise<Drink[]> => {
  const res = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return res.data.drinks;
};

export const getSingleCocktail = async (id: string) => {
  const res = await axios.get(`${cocktailLookupUrl}${id}`);
  const drink: Drink = res.data.drinks[0];
  return drink;
};
