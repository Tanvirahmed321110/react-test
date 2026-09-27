import { Link } from 'react-router-dom'
import ads1 from '../../../assets/image/ads.png'
import ads2 from '../../../assets/image/ads2.png'

const Ads = () => {
    return (
        <div className="
            h:[150px]
            grid 
            grid-cols-2 
            md:flex 
            md:flex-col 
            gap-6 
            md:h-full
        ">
            <Link to="/products/3" className="md-h-full  h-4/5 overflow-hidden">
                <img
                    src={ads1}
                    alt="Ads 1"
                    className="w-full h-full object-cover"
                />
            </Link>

            <Link to="/products/3" className=" overflow-hidden">
                <img
                    src={ads2}
                    alt="Ads 2"
                    className="w-full md:h-full h-4/5 object-cover"
                />
            </Link>
        </div>
    )
}

export default Ads