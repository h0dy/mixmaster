import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalLoading from "./components/GlobalLoading";

const Layout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      <main className="container xl:max-w-6xl mx-auto px-5 py-20">
        {isPageLoading ? <GlobalLoading /> : <Outlet />}
      </main>
    </>
  );
};

export default Layout;
