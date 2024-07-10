import { Button } from "@/@/components/ui/button";
import { Separator } from "@/@/components/ui/separator";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/@/components/ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileNav() {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className='text-orange-500' />
            </SheetTrigger>
            <SheetContent className='space-y-3'>
                {isAuthenticated ? (
                    <span className='flex items-center  font-bold px-3 hover:text-orange-500 gap-2'>
                        <CircleUserRound className='text-orange-500' />
                        {user?.email}
                    </span>
                ) : (
                    <SheetTitle>
                        <span>Welcome to MERNEats.com</span>
                    </SheetTitle>
                )}

                <Separator />
                <SheetDescription className='flex flex-col gap-4'>
                    {isAuthenticated ? (
                        <MobileNavLinks />
                    ) : (
                        <Button
                            onClick={async () => await loginWithRedirect()}
                            className='flex-1 font-bold bg-orange-500'
                        >
                            Log In
                        </Button>
                    )}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
}
