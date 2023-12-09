import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Movie from "./Movie";
import DataMovie from "../../Model/Movie";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface MoviesSlidesProps {
    movies: DataMovie[];
}

const MoviesSlides: FC<MoviesSlidesProps> = ({ movies }) => (
    <Swiper slidesPerView="auto" spaceBetween={15} className="mySwiper">
        {movies.map((movie: DataMovie) => {
            return (
                <SwiperSlide
                    key={movie.id}
                    className="flex flex-col xs:gap-[14px] gap-2 max-w-[170px] rounded-lg"
                >
                    <Movie movie={movie} />
                </SwiperSlide>
            );
        })}
    </Swiper>
);

export default MoviesSlides;
