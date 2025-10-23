import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const err = useRouteError();
  if (!isRouteErrorResponse(err)) return <h1>something went wrong</h1>;

  if (err.status === 404) {
    return (
      <div className="min-h-screen text-center flex flex-col items-center justify-center">
        <img
          src={img}
          alt="error not found"
          className="max-w-[600px] w-[90vw] block mb-8"
        />
        <h3 className="text-3xl">Ohh!</h3>
        <p className="leading-2 text-gray-500 my-4">
          We can't seem to find the page your are looking for
        </p>
        <Link className="text-teal-500" to="/">
          Back home
        </Link>
      </div>
    );
  }
  return (
    <>
      <h1>Error</h1>
    </>
  );
};

export default Error;
