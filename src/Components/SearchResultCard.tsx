import { AspectRatio } from "@/@/components/ui/aspect-ratio";
import { Restaurant } from "@/types";
import { Banknote, Clock, Dot } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
    restaurant: Restaurant;
};
export const SearchResultCard = ({ restaurant }: Props) => {
    return (
        <Link
            to={`/detail/${restaurant._id}`}
            className="grid lg:grid-cols-[2fr_3fr] gap-5 group"
        >
            <AspectRatio ratio={16 / 6}>
                <img
                    src={restaurant.imageUrl}
                    className="rounded-md w-full h-full object-cover"
                    alt="Image"
                />
            </AspectRatio>
            <div className="flex flex-col">
                {" "}
                <h3 className="text-2xl font-bold tracking-tight group-hover:underline">
                    {restaurant.restaurantName}
                </h3>
                <div id="card-content" className="grid md:grid-cols-2 ">
                    <div className="flex flex-row flex-wrap">
                        {restaurant.cuisines.map((item, index) => (
                            <span className="flex flex-row">
                                <span>{item}</span>
                                {index < restaurant.cuisines.length - 1 && (
                                    <Dot />
                                )}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-2 flex-col">
                        <div className="flex items-center gap-1 text-green-600">
                            <Clock className="text-green-600" />
                            {restaurant.estimatedDeliveryTime} mins
                        </div>
                        <div className="flex items-center gap-1">
                            <Banknote />
                            Delivery from $
                            {(restaurant.deliveryPrice / 100).toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
