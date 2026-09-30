import { Link } from "react-router-dom";

function Categorycard({ image, title, offer, category }) {
    return (
        <article className="rounded-lg   shadow-md hover:shadow-xl   transition-shadow duration-300 overflow-hidden group">
            <div className="card-image-wrap relative overflow-hidden h-[120px] md:h-[180px]">

                <Link to={`/category?name=${category}`}>
                    <img
                        className="card-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        src={image}
                        alt={title}
                    />
                </Link>

                <span className="card-tag absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {category}
                </span>

            </div>

            <div className="card-content p-2 md:p-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
                    {title}
                </h4>

                <p className="card-offer text-sm text-green-600 font-medium">
                    {offer}
                </p>
            </div>
        </article>
    );
}

export default Categorycard;