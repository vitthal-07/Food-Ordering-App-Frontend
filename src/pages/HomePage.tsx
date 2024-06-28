import LandingImage from "../assets/landing.png";
import AppDownload from "../assets/appDownload.png";

export default function HomePage() {
    return (
        <div className='flex flex-col gap-12'>
            <div className='bg-white rounded-lg py-8 shadow-md flex flex-col gap-5 text-center -mt-16'>
                <h1 className='text-5xl font-bold tracking-tight text-orange-500'>
                    Tuck into a takway today
                </h1>
                <span className='text-xl'>Food is just a click away!</span>
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                <img src={LandingImage} alt='landing image' />
                <div className='flex flex-col items-center justify-center text-center gap-4'>
                    <span className='font-bold tracking-tighter text-3xl'>
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download the MernEats App for faster ordering and
                        personalized reccommendations
                    </span>
                    <img src={AppDownload} alt='download app' />
                </div>
            </div>
        </div>
    );
}
