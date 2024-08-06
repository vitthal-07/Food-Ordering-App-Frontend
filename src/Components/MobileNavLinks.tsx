import { Button } from "@/@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function MobileNavLinks() {
    const { logout } = useAuth0();
    return (
        <>
            <Link
                to='/order-status'
                className='flex bg-white items-center font-bold hover:text-orange-500 '
            >
                Order Status
            </Link>
            <Link
                to='/user-profile'
                className='flex bg-white items-center font-bold hover:text-orange-500 '
            >
                User Profile
            </Link>
            <Link
                to='/manage-restaurant'
                className='flex bg-white items-center font-bold hover:text-orange-500 '
            >
                My Restaurant
            </Link>
            <Button
                onClick={() => logout()}
                className='flex items-center hover:bg-orange-500 px-3 font-bold'
            >
                Log Out
            </Button>
        </>
    );
}
