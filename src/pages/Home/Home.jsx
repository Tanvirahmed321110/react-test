import Ads from "./components/Ads"
import Banner from "./components/Banner"
import './home.css'

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
        </div>
    )
}

export default Home
