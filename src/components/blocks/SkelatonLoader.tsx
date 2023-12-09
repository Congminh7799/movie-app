import { memo, FC } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface SkelatonLoaderProps {
  className?: string;
  isMoviesSliderLoader?: boolean;
}

export const SkelatonLoader: FC<SkelatonLoaderProps> = memo(
  ({ className, isMoviesSliderLoader = true }) => {

    const classNames = isMoviesSliderLoader
      ? `flex flex-row items-center gap-[15px] overflow-hidden `
      : `flex flex-row flex-wrap items-center xs:gap-4 gap-[14px] justify-center ${className}`;

    const isScreenSmall = window.innerWidth < 380;

    const arrSize = isMoviesSliderLoader
      ? Math.floor(window.innerWidth / 170) + 1
      : 10;

    return (
      <SkeletonTheme
        baseColor={"#f5f5f5" }
        highlightColor={"#eee"}
      >
        <div className={classNames}>
          {Array.from({ length: arrSize }).map((_item, index) => {
            return (
              <div
                key={index}
                className={`${!isMoviesSliderLoader ? "mb-6" : ""}`}
              >
                <Skeleton height={isScreenSmall ? 216 : 250} width={170} />
                <div className="text-center">
                  <Skeleton className="xs:mt-4 mt-3 w-[80%] " />
                </div>
              </div>
            );
          })}
        </div>
      </SkeletonTheme>
    );
  }
);

export const Loader = memo(() => {
  return (
    <div className="relative dark:bg-black bg-mainColor top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="loader" />
    </div>
  );
});
