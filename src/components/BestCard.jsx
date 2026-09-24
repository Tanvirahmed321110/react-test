import { Link } from "react-router-dom";
import '.././data/trendingItems'

function BestCard(props) {
    return (
        <article className="best-card bg-white rounded-xl shadow-xl   transition-all duration-300 overflow-hidden group flex flex-col h-full">
            <div className="best-card-image relative overflow-hidden">
                <Link to={`/products/${props.id}`}>
                    <img
                        src={props.image}
                        alt={props.title}
                        className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </Link>

                <span className="best-card-tag absolute top-3 left-3 bg-gray-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full tracking-wide">
                    {props.tag}
                </span>

                <span className="best-card-offer absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                    {props.offer}
                </span>
            </div>

            <div className="best-card-content p-4 flex flex-col flex-1">
                {/* Category + Rating একই লাইনে (বাম-ডান) */}
                <div className="flex items-center justify-between mb-1.5">
                    <p className="best-card-category text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                        {props.brand} • {props.category}
                    </p>
                    <div className="flex items-center gap-1 text-xs">
                        <span className="text-amber-400">⭐</span>
                        <span className="font-semibold text-gray-800">{props.rating}</span>
                    </div>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">
                    {props.title}
                </h3>

                <p className="best-card-description text-sm text-gray-500 mb-3 line-clamp-2 leading-relaxed">
                    {props.description}
                </p>

                {/* Price + Stock একই লাইনে (বাম-ডান) */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <strong className="text-2xl font-bold text-gray-900">
                            ${props.price}
                        </strong>
                        <del className="text-sm text-gray-400">${props.oldPrice}</del>
                    </div>

                    <p
                        className={`text-xs font-semibold flex items-center gap-1.5 ${props.stock > 0 ? "text-emerald-600" : "text-red-500"
                            }`}
                    >
                        <span
                            className={`w-1.5 h-1.5 rounded-full ${props.stock > 0 ? "bg-emerald-600" : "bg-red-500"
                                }`}
                        ></span>
                        {props.stock > 0 ? `${props.stock} in stock` : "Out of stock"}
                    </p>
                </div>

                <button className="mt-auto w-full card-btn  text-white text-md font-semibold py-2 rounded-lg transition-colors duration-200 active:scale-[0.98]">
                    Add to Cart
                </button>
            </div>
        </article>
    );
}

export default BestCard;