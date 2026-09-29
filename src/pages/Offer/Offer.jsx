import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import bestItems from '../../data/bestItems'
import BestCard from '../../components/BestCard'
import OfferEmpty from './OfferEmpty'

function Offer() {

    const offerItems = bestItems.filter((item) => item.is_offer === true)

    return (
        <div className='mt-8'>
            <Breadcrumb
                items={[
                    { label: "Home", to: "/" },
                    { label: "Happy Hours", to: "/products" },
                    // { label: categoryName },
                ]}
            />

            <div className="container">
                <div className="text-2xl font-bold text-center"> Happy Hours</div>
                <div className='mt-8'>
                    {
                        offerItems.length === 0 ? (
                            <OfferEmpty />
                        ) :
                            (
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    {offerItems.map((item) => (
                                        <BestCard key={item.id} {...item} />
                                    ))}
                                </div>
                            )
                    }
                </div>
            </div>
        </div >
    )
}

export default Offer
