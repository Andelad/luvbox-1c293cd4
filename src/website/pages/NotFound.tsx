import { useEffect } from"react";
import { useLocation } from"react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
"404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center relative z-10">
        <h1 className="mb-4">404</h1>
        <p className="text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
