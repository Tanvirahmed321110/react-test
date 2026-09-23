import ads1 from '../../../assets/image/ads.png'
import ads2 from '../../../assets/image/ads2.png'

const Ads = () => {
    return (
        <div className="flex flex-col gap-6  h-full bg-gray-200">
            <img
                src={ads1}
                alt="Ads 1"
                className="w-full flex-1 min-h-0 object-cover "
            />

            <img
                src={ads2}
                alt="Ads 2"
                className="w-full flex-1 min-h-0 object-cover "
            />
        </div>
    )
}

export default Ads
