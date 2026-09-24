import { Link } from "react-router-dom";

function Breadcrumb({ items }) {
    return (
        <div className="container">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500 bg-blue-50 p-3">
                <ol className="flex flex-wrap items-center gap-2">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={index} className="flex items-center gap-2">
                                {isLast || !item.to ? (
                                    <span
                                        className="font-medium text-gray-800"
                                        aria-current={isLast ? "page" : undefined}
                                    >
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link to={item.to} className="hover:text-orange-600">
                                        {item.label}
                                    </Link>
                                )}

                                {!isLast && <span aria-hidden="true">/</span>}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}

export default Breadcrumb;