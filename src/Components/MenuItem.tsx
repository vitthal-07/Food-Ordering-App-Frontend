import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/@/components/ui/card";
import { MenuItems } from "@/types";

type Props = {
    menuItem: MenuItems;
    addToCart: (menuItem: MenuItems) => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
    return (
        <Card className="cursor-pointer" onClick={() => addToCart(menuItem)}>
            <CardHeader>
                <CardTitle>{menuItem.name}</CardTitle>
            </CardHeader>
            <CardContent className="font-bold">
                ${(menuItem.price / 100).toFixed(2)}
            </CardContent>
        </Card>
    );
};

export default MenuItem;
