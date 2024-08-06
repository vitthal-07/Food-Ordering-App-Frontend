import { AspectRatio } from "@/@/components/ui/aspect-ratio";
import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/Components/OrderStatusDetail";
import OrderStatusHeader from "@/Components/OrderStatusHeader";

export default function OrderStatus() {
    const { orders, isLoading } = useGetMyOrders();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!orders || orders.length === 0) {
        return <h1>No orders found</h1>;
    }
    return (
        <div className='space-y-10'>
            {orders.map((order) => (
                <div
                    key={order._id}
                    className='space-y-10 bg-gray-50 p-10 rounded-lg'
                >
                    <OrderStatusHeader order={order} />
                    <div className='grid gap-10 lg:grid-cols-2'>
                        <OrderStatusDetail order={order} />
                        <AspectRatio ratio={16 / 6}>
                            <img
                                src={order.restaurant.imageUrl}
                                className='rounded-md w-full h-full object-cover'
                                alt='Image'
                            />
                        </AspectRatio>
                    </div>
                </div>
            ))}
        </div>
    );
}
