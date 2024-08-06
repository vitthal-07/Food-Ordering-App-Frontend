import { Badge } from "@/@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/@/components/ui/select";
import { Separator } from "@/@/components/ui/separator";
import { useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";
import { ORDER_STATUS } from "@/config/order-status-config";
import { Order, OrderStatus } from "@/types";
import { Label } from "@radix-ui/react-label";
import { SelectTrigger } from "@radix-ui/react-select";
import { useEffect, useState } from "react";

type Props = {
    order: Order;
};

const OrderItemCard = ({ order }: Props) => {
    const [status, setStatus] = useState<OrderStatus>(order.status);
    const { updateOrderStatus, isLoading } = useUpdateMyRestaurantOrder();

    useEffect(() => {
        setStatus(order.status);
    }, [order.status]);

    const handleStatusChange = async (newStatus: OrderStatus) => {
        try {
            await updateOrderStatus({
                orderId: order._id as string,
                status: newStatus,
            });
            setStatus(newStatus);
        } catch (error) {
            console.error(error);
        }
    };
    const getTime = () => {
        const date = new Date(order.createdAt);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const paddedminutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours}:${paddedminutes}`;
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle className='grid md:grid-cols-4 gap-4 justify-between mb-3'>
                    <div>
                        Customer Name:
                        <span className='ml-2 font-normal'>
                            {order.deliveryDetails.name}
                        </span>
                    </div>
                    <div>
                        Delivery address:
                        <span className='ml-2 font-normal'>
                            {order.deliveryDetails.addressLine1},{" "}
                            {order.deliveryDetails.city}
                        </span>
                    </div>
                    <div>
                        Time:
                        <span className='ml-2 font-normal'>{getTime()}</span>
                    </div>
                    <div>
                        Total Cost:
                        <span className='ml-2 font-normal'>
                            ${(order.totalAmount / 100).toFixed(2)}
                        </span>
                    </div>
                </CardTitle>
                <Separator />
            </CardHeader>
            <CardContent className='flex flex-col gap-6'>
                <div className='flex flex-col gap-2'>
                    {order.cartItems.map((cartItem) => (
                        <span>
                            <Badge variant='outline' className='mr-2'>
                                {cartItem.quantity} x
                            </Badge>
                            {cartItem.name}
                        </span>
                    ))}
                </div>
                <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='status'>
                        What is the status of this order?
                    </Label>
                    <Select
                        value={status}
                        disabled={isLoading}
                        onValueChange={(value) =>
                            handleStatusChange(value as OrderStatus)
                        }
                    >
                        <SelectTrigger
                            id='status'
                            className='hover:border-[1px] border-gray-500'
                        >
                            <SelectValue placeholder='Click to change status' />
                        </SelectTrigger>
                        <SelectContent position='popper'>
                            {ORDER_STATUS.map((status) => (
                                <SelectItem
                                    key={status.progressValue}
                                    value={status.value}
                                >
                                    {status.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    );
};

export default OrderItemCard;
