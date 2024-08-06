import LandingImage from "../assets/landing.png";
import AppDownload from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/Components/SearchBar";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`,
        });
    };
    return (
        <div className='flex flex-col gap-12'>
            <div className='md:px-32 bg-white rounded-lg py-8 shadow-md flex flex-col gap-5 text-center -mt-16'>
                <h1 className='text-5xl font-bold tracking-tight text-orange-500'>
                    Tuck into a takway today
                </h1>
                <span className='text-xl'>Food is just a click away!</span>
                <SearchBar
                    placeHolder='Search by City or Town'
                    onSubmit={handleSearchSubmit}
                />
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                <img src={LandingImage} alt='landing image' />
                <div className='flex flex-col items-center justify-center text-center gap-4'>
                    <span className='font-bold tracking-tighter text-3xl'>
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download the Feastly for faster ordering and
                        personalized reccommendations
                    </span>
                    <img src={AppDownload} alt='download app' />
                </div>
            </div>
        </div>
    );
}
