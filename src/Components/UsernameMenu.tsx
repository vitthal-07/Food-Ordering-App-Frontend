import { Button } from "@/@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/@/components/ui/dropdown-menu";
import { Separator } from "@/@/components/ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

export default function UsernameMenu() {
    const { user, logout } = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center  font-bold px-3 hover:text-orange-500 gap-2'>
                <CircleUserRound className='text-orange-500' />
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link
                        to='/user-profile'
                        className='font-bold hover:text-orange-500'
                    >
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link
                        to='/manage-restaurant'
                        className='font-bold hover:text-orange-500'
                    >
                        Manage Restaurant
                    </Link>
                </DropdownMenuItem>
                <Separator />
                <DropdownMenuItem>
                    <Button
                        onClick={() =>
                            logout({
                                logoutParams: {
                                    retunTo: import.meta.env
                                        .VITE_APP_URL as string,
                                },
                            })
                        }
                        className='flex  flex-1 bg-orange-500 font-bold'
                    >
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
