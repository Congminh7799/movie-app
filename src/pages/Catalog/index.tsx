import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { CatalogHeader, Search } from "./components";
import { SkelatonLoader } from "../../components/blocks/SkelatonLoader";
import Movie from "../../components/blocks/Movie";
import { useQuery } from "@tanstack/react-query";
import axiosCustom from "../../Api/axiosCustom";
import DataMovie from "../../Model/Movie";

const fetchMovies = async (category?: string, type?: string, page?: number, searchQuery?: string) => {
  const response = await axiosCustom.get(`/${category}/${type}`, {
    params: {
      page,
      searchQuery
    },
  });
  return response.data.results;
};

const Catalog = () => {
  const [page, setPage] = useState(1);
  const [shows, setShows] = useState<any[]>([]);
  const [isCategoryChanged, setIsCategoryChanged] = useState<boolean>(false);
  const [query, setQuery] = useSearchParams();
  const { category } = useParams();

  const type = query.get("type") || "popular";
  const searchQuery = query.get("search") || "";

  const { data, isLoading, isFetching } = useQuery<DataMovie[], Error>({
    queryKey: [],
    queryFn: () => fetchMovies(category, type, page, searchQuery),
  });

  useEffect(() => {
    setPage(1);
    setIsCategoryChanged(true);
  }, [category, searchQuery]);

  useEffect(() => {
    if (isLoading || isFetching) return;

    if (data) {
      if (page > 1) {
        setShows((prev: any) => [...prev, ...data]);
      } else {
        setShows([...data]);
        setIsCategoryChanged(false);
      }
    }
  }, [data, isFetching, isLoading, page]);

  return (
    <>
      <CatalogHeader category={String(category)} />
      <section>
        <Search setQuery={setQuery} />

        {isLoading || isCategoryChanged ? (
          <SkelatonLoader isMoviesSliderLoader={true} />
        ) : (
          <div

            className="flex flex-wrap xs:gap-4 gap-[14px] justify-center"
          >
            {shows?.map((movie: any, index) => (
              <div
                key={index}
                className="flex flex-col xs:gap-4 gap-2 xs:max-w-[170px] max-w-[124px] rounded-lg lg:mb-6 md:mb-5 sm:mb-4 mb-[10px]"
              >
                <Movie movie={movie} category={category ? category : 'movie'} />
              </div>
            ))}
          </div>
        )}

        {isFetching && !isCategoryChanged ? (
          <SkelatonLoader
            isMoviesSliderLoader={false}
            className="md:pt-8 sm:pt-7 pt-6"
          />
        ) : (
          <div className="w-full flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                setPage(page + 1);
              }}
              disabled={isFetching}
              className="sm:py-2 xs:py-[6px] py-1 sm:px-4 xs:px-3 px-[10.75px] bg-[#ff0000] text-gray-50 rounded-full md:text-[15.25px] sm:text-[14.75px] xs:text-[14px] text-[12.75px] shadow-md hover:-translate-y-1 transition-all duration-300 font-medium font-nunito lg:my-8 my-7"
            >
              Load more
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Catalog;
