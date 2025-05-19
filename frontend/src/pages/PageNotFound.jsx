import { Link } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";

const PageNotFound =() => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center px-4">
      <BiErrorCircle className="text-red-500 text-8xl mb-4" />
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="btn btn-error">
        Go to Home
      </Link>
    </div>
  );
}
export default PageNotFound;