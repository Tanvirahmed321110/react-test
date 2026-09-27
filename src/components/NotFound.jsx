import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <div className="text-center">

                <h1 className="text-[80px] md:text-[120px] font-extrabold text-orange-500 leading-none">
                    404
                </h1>

                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mt-3 max-w-md mx-auto">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="
        inline-block
        mt-6
        w-full
        rounded-lg
        bg-orange-600
        py-2.5
        text-md
        font-semibold
        !text-white
        hover:bg-orange-700
        transition
    "
                >
                    Back To Home
                </Link>

            </div>
        </div >
    );
}

export default NotFound;