import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/@/components/ui/tabs";
import {
    useCreateMyRestaurant,
    useGetMyRestaurant,
    useGetMyRestaurantOrders,
    useUpdateRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/Components/OrderItemCard";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {
    const { createRestaurant, isLoading: isCreateLoading } =
        useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();
    const { updateRestaurant, isLoading: isUpdateLoading } =
        useUpdateRestaurant();
    const { orders, isLoading: isOrdersLoading } = useGetMyRestaurantOrders();

    if (isOrdersLoading) {
        return <div>Loading...</div>;
    }

    const isEditing = !!restaurant;
    return (
        <Tabs defaultValue='orders'>
            <TabsList>
                <TabsTrigger value='orders'>Orders</TabsTrigger>
                <TabsTrigger value='manage-restaurant'>
                    Manage Restaurant
                </TabsTrigger>
            </TabsList>
            <TabsContent
                value='orders'
                className='space-y-5 bg-gray-50 pg-10 rounded-lg'
            >
                <h2 className='tex-2xl'>{orders?.length} active orders</h2>
                {orders?.map((order) => (
                    <OrderItemCard key={order._id} order={order} />
                ))}
            </TabsContent>
            <TabsContent value='manage-restaurant'>
                <ManageRestaurantForm
                    onSave={isEditing ? updateRestaurant : createRestaurant}
                    isLoading={isCreateLoading || isUpdateLoading}
                    restaurant={restaurant}
                />
            </TabsContent>
        </Tabs>
    );
}
