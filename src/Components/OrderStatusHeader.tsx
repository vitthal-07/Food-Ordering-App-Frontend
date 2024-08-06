import { Progress } from "@/@/components/ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";
import { Order } from "@/types";

type Props = {
    order: Order;
};
export default function OrderStatusHeader({ order }: Props) {
    const getExpectedDelivery = () => {
        const created = new Date(order.createdAt);
        created.setMinutes(
            created.getMinutes() + order.restaurant.estimatedDeliveryTime
        );

        const hours = created.getHours();
        const minutes = created.getMinutes();
        const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${hours}:${paddedMinutes}`;
    };

    const getOrderStatusInfo = () => {
        return (
            ORDER_STATUS.find((status) => status.value === order.status) ||
            ORDER_STATUS[0]
        );
    };
    return (
        <>
            <h1 className='text-4xl font-bold tracking-tighter flex flex-col gap-5 lg:flex-row lg:justify-between'>
                <span>Order Status: {getOrderStatusInfo().label}</span>
                <span>Expected By: {getExpectedDelivery()}</span>
            </h1>
            <Progress
                value={getOrderStatusInfo().progressValue}
                className='animate-pulse'
            />
        </>
    );
}
