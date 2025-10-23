import { Suspense } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import Loading from "../components/GlobalLoading";

const Landing = () => {
  return (
    <>
      <SearchForm />
      <Suspense fallback={<Loading />}>
        <CocktailList />
      </Suspense>
    </>
  );
};

export default Landing;
