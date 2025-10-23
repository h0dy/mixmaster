import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Cocktail, Error, Landing, Newsletter } from "./pages";
import Layout from "./Layout";
import { Suspense } from "react";
import Loading from "./components/GlobalLoading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // queries valid for 5 min
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // make this page as the default for "/" route
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "cocktail/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Cocktail />,
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}

export default App;
