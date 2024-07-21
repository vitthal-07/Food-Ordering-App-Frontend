import { Link } from "react-router-dom";

type Props = {
    total: number;
    city: string;
};

export const SearchInfo = ({ total, city }: Props) => {
    return (
        <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
            <span className="">
                {total !== 0 ? total : "No"}
                {total === 1 ? "Restaurant" : "Restaurants"} found in{" "}
                {city.toUpperCase()}
                <Link
                    to="/"
                    className="text-sm font-semibold text-blue-500 cursor-pointer underline ml-1"
                >
                    Change Location
                </Link>
            </span>
        </div>
    );
};
