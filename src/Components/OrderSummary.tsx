import { Badge } from "@/@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/@/components/ui/card";
import { Separator } from "@/@/components/ui/separator";
import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { Trash } from "lucide-react";

type Props = {
    restaurant: Restaurant;
    cartItems: CartItem[];
    removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ cartItems, restaurant, removeFromCart }: Props) => {
    const getTotalCost = () => {
        let totalCost = cartItems.reduce(
            (total, cartItem) => total + cartItem.price * cartItem.quantity,
            0
        );
        const totalWithDelivery = totalCost + restaurant.deliveryPrice;
        return (totalWithDelivery / 100).toFixed(2);
    };
    return (
        <>
            <CardHeader>
                <CardTitle className="text-2xl font-bold flex justify-between tracking-tight">
                    <span>Your Order</span>
                    <span>${getTotalCost()}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                {cartItems.map((item, index) => (
                    <div className="flex justify-between" key={index}>
                        <span>
                            <Badge variant="outline" className="mr-2">
                                {item.quantity}
                            </Badge>
                            {item.name}
                        </span>

                        <span className="flex">
                            ${((item.price * item.quantity) / 100).toFixed(2)}
                            <Trash
                                className="cursor-pointer ml-2"
                                size={20}
                                color="red"
                                onClick={() => removeFromCart(item)}
                            />
                        </span>
                    </div>
                ))}
                <Separator />
                <div className="flex justify-between">
                    <span>Delivery </span>
                    <span>${(restaurant.deliveryPrice / 100).toFixed(2)}</span>
                </div>
                <Separator />
            </CardContent>
        </>
    );
};

export default OrderSummary;
