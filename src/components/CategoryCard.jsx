import { Link } from "react-router-dom";

function Categorycard({ image, title, tag, offer, id }) {
    return (
        <article className="card bg-white rounded-xl shadow-md hover:shadow-xl   transition-shadow duration-300 overflow-hidden group">
            <div className="card-image-wrap relative overflow-hidden">

                <Link to={`/category/${id}`}>
                    <img
                        className="card-image w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        src={image}
                        alt={title}
                    />
                </Link>


                <span className="card-tag absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {tag}
                </span>
            </div>

            <div className="card-content p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
                    {title}
                </h3>

                <p className="card-offer text-sm text-green-600 font-medium">
                    {offer}
                </p>
            </div>
        </article>
    );
}

export default Categorycard;