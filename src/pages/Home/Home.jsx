import Ads from "./components/Ads"
import Banner from "./components/Banner"
import Card from "../../components/Card"
import './home.css'
import trendingItems from "../../data/trendingItems"
import bestItems from "../../data/bestItems";
import BestCard from "../../components/BestCard"


const Home = () => {
    return (
        <div className="">
            <div className="container">
                <div className="hero flex gap-6 h-[480px]">
                    <div className="banner h-full overflow-hidden  w-[70%]">
                        <Banner />
                    </div>

                    <div className=" flex flex-col  w-[30%] h-full bg-red-300">
                        <Ads />
                    </div>
                </div>
            </div>


            {/* Trending Section */}
            <div className="section-gap">
                <div className="container">
                    <h2 className="section-title">Best Category </h2>
                    <div className="grid grid-cols-1 gap-4  pt-1 sm:grid-cols-2 lg:grid-cols-5">

                        {trendingItems.map((item) => (
                            <Card
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            </div>


            {/* Best Items Section */}
            <section className="section-gap">
                <div className="container">
                    <h2 className="section-title">Trending Best Items </h2>
                    <div className="best-card grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {
                            bestItems.slice(0, 8).map((item) => (
                                <BestCard
                                    key={item.id}
                                    {...item}
                                />
                            )
                            )
                        }
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Home
