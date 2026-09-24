import { useSearchParams } from "react-router-dom";
import bestItems from "../../data/bestItems";
import BestCard from "../../components/BestCard";

function Category() {
    const [searchParams] = useSearchParams();
    const categoryName = searchParams.get("name");

    const filteredItems = bestItems.filter(
        (item) => item.category.toLowerCase() === categoryName?.toLowerCase()
    );

    return (
        <div className="section-gap">
            <div className="container">
                <h1 className="mb-6 text-3xl font-bold capitalize">
                    {categoryName} shoes
                    <span className="ml-2 text-base font-normal text-gray-500">
                        ({filteredItems.length})
                    </span>
                </h1>

                {filteredItems.length === 0 ? (
                    <p className="text-gray-600">এই category-তে কোনো পণ্য নেই।</p>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredItems.map((item) => (
                            <BestCard key={item.id} {...item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Category;