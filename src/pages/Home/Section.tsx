import { memo, useState, useRef, useEffect, useMemo, FC } from "react";
import { Link } from "react-router-dom";
import { SkelatonLoader } from "../../components/blocks/SkelatonLoader";
import Error from "../../components/layouts/Error";
import MoviesSlides from "../../components/blocks/MoviesSlides";
import { useQuery } from "@tanstack/react-query";
import axiosCustom from "../../Api/axiosCustom";
import Movie from "../../Model/Movie";

interface SectionProps {
    title: string;
    category: string;
    className?: string;
    type?: string;
    id?: number;
    showSimilarShows?: boolean;
}

const Section: FC<SectionProps> = ({
    title,
    category,
    className,
    type,
    showSimilarShows,
}) => {
    const [isInView, setIsInView] = useState<boolean>(false);
    const ref = useRef<HTMLElement | null>(null);

    const fetchMovies = async () => {
        const response = await axiosCustom.get(`/${category}/${type}`);
        console.log(category, type);

        return response.data.results;
    };

    const { data, isLoading, isError, error } = useQuery<Movie[], Error>({
        queryKey: [],
        queryFn: () => fetchMovies(),
        enabled: !isInView
    });

    useEffect(() => {
        const observerHandler = (
            entries: IntersectionObserverEntry[],
            observer: IntersectionObserver
        ) => {
            const entry = entries[0];
            if (!entry.isIntersecting) return;
            setIsInView(true);
            observer.unobserve(entry.target);
        };

        const observer = new IntersectionObserver(observerHandler, {
            root: null,
            rootMargin: "580px",
            threshold: 0.1,
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const errorMessage = useMemo(
        () => (isError ? error.message : ""),
        [error, isError]
    );

    const sectionStyle = `sm:py-[20px] xs:py-[18.75px] py-[16.75px] font-nunito ${className}`;
    const linkStyle = `sm:py-1 py-[2px] sm:text-[14px] xs:text-[12.75px] text-[12px] sm:px-4 px-3 rounded-full view-all-btn--light dark:text-gray-300 hover:-translate-y-1 transition-all duration-300`;

    return (
        <section className={sectionStyle} ref={ref}>
            <div
                className={`flex flex-row justify-between items-center sm:mb-6 mb-[22.75px]`}
            >
                <h3 className="sm:text-[22.25px] xs:text-[20px] text-[18.75px] dark:text-gray-50 sm:font-bold font-semibold relative">
                    <span>{title}</span>
                    <div className="line" />
                </h3>
                {!showSimilarShows && (
                    <Link to={`${category}?type=${type}`} className={linkStyle}>
                        View all
                    </Link>
                )}
            </div>
            <div className="xs:min-h-[250px] min-h-[216px]">
                {isLoading ? (
                    <SkelatonLoader />
                ) : isError ? (
                    <Error
                        error={String(errorMessage)}
                        className="xs:h-[250px] h-[216px] text-[18px]"
                    />
                ) : data ? (
                    <MoviesSlides movies={data.slice(0, 12)} category={category} />
                ) : null}
            </div>
        </section>
    );
};

export default memo(Section);
