// User
export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

// My Restaurant
export type MenuItems = {
    _id: string;
    name: string;
    price: number;
};
export type Restaurant = {
    _id: string;
    user: string;
    restaurantName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItems[];
    imageUrl: string;
    lastUpdated: string;
};

// Restaurant Search
export type RestaurantSearchResponse = {
    data: Restaurant[];
    pagination: {
        total: number;
        page: number;
        pages: number;
    };
};

// Order
export type OrderStatus =
    | "placed"
    | "paid"
    | "inProgress"
    | "outForDelivery"
    | "delivered";

export type Order = {
    _id: string;
    user: User;
    restaurant: Restaurant;
    deliveryDetails: {
        email: string;
        name: string;
        addressLine1: string;
        city: string;
        country: string;
    };
    cartItems: {
        menuItemId: string;
        name: string;
        price: number;
        quantity: number;
    }[];
    totalAmount: number;
    status: OrderStatus;
    createdAt: string;
    restaurantId: string;
};
