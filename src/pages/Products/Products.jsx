import React from 'react'
import BestCard from '../../components/BestCard'
import bestItems from "../../data/bestItems";
import Breadcrumb from '../../components/Breadcrumb';


function Products() {
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
                        bestItems.map(item => (
                            <BestCard key={item.key} {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
