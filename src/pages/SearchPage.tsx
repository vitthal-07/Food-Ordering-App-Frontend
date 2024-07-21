import { useSearchRestaurants } from "@/api/RestaurantApi";
import CuisineFilter from "@/Components/CuisineFilter";
import PaginationSelector from "@/Components/PaginationSelector";
import SearchBar, { SearchForm } from "@/Components/SearchBar";
import { SearchInfo } from "@/Components/SearchInfo";
import { SearchResultCard } from "@/Components/SearchResultCard";
import SortOptionDropdown from "@/Components/SortOptionDropdown";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
    searchQuery: string;
    page: number;
    selectedCuisines: string[];
    sortOption: string;
};

export default function SearchPage() {
    const { city } = useParams();
    const [searchState, setSearchState] = useState<SearchState>({
        searchQuery: "",
        page: 1,
        selectedCuisines: [],
        sortOption: "",
    });
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const { results, isLoading } = useSearchRestaurants(searchState, city);

    const setPage = (page: number) => {
        setSearchState((prevState) => ({
            ...prevState,
            page,
        }));
    };

    const setSortOption = (sortOption: string) => {
        setSearchState((prevState) => ({
            ...prevState,
            sortOption,
        }));
    };

    const setSelectedCuisines = (selectedCuisines: string[]) => {
        setSearchState((prevState) => ({
            ...prevState,
            selectedCuisines,
            page: 1,
        }));
    };

    const setSearchQuery = (searchFormData: SearchForm) => {
        setSearchState((prevState) => ({
            ...prevState,
            searchQuery: searchFormData.searchQuery,
            page: 1,
        }));
    };
    const resetSearch = () => {
        setSearchState((prevState) => ({
            ...prevState,
            searchQuery: "",
            page: 1,
        }));
    };

    if (isLoading) {
        return <span>Loading...</span>;
    }
    if (!results?.data || !city) {
        return <span>No results found</span>;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
            <div id="cuisines-list">
                <CuisineFilter
                    onChange={setSelectedCuisines}
                    selectedCuisines={searchState.selectedCuisines}
                    isExpanded={isExpanded}
                    onExpandedClick={() =>
                        setIsExpanded((prevIsExpanded) => !prevIsExpanded)
                    }
                />
            </div>
            <div id="main-content" className="flex flex-col gap-5">
                <SearchBar
                    searchQuery={searchState.searchQuery}
                    onSubmit={setSearchQuery}
                    placeHolder="Search by Cuisine or Restaurant name"
                    onReset={resetSearch}
                />
                <div className="flex justify-between flex-col gap-3 lg:flex-row">
                    <SearchInfo total={results.pagination.total} city={city} />
                    <SortOptionDropdown
                        sortOption={searchState.sortOption}
                        onChange={(value) => setSortOption(value)}
                    />
                </div>
                {results.data.map((restaurant) => (
                    <SearchResultCard
                        key={restaurant._id}
                        restaurant={restaurant}
                    />
                ))}

                <PaginationSelector
                    page={results.pagination.page}
                    pages={results.pagination.pages}
                    onPageChange={setPage}
                />
            </div>
        </div>
    );
}
