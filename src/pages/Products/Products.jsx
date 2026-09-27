import React, { useState } from 'react'
import BestCard from '../../components/BestCard'
import bestItems from "../../data/bestItems";
import Breadcrumb from '../../components/Breadcrumb';

import Pagination from "../../components/Pagination";

const PER_PAGE = 8;

function Products() {


    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(bestItems.length / PER_PAGE);
    const start = (page - 1) * PER_PAGE;
    const items = bestItems.slice(start, start + PER_PAGE);

    const handlePageChange = (newPage) => {
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className='section-gap'>
            <Breadcrumb
                items={[
                    { label: "Home", to: "/" },
                    { label: "Products", to: "/products" },
                    // { label: categoryName },
                ]}
            />

            <div className="container">
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5'>
                    {
                        items.map(item => (
                            <BestCard key={item.key} {...item} />
                        ))
                    }
                </div>

                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default Products
