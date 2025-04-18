import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-700 mt-5">Oops! Page not found.</p>
      <Link to="/" className="mt-4 md:mt-8 px-6 md:px-8 py-2 border-2 border-slate-300 text-dark rounded-full hover:bg-blue-200">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
