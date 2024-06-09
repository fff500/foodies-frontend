import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetTestimonialsQuery } from "../../redux";
import sprite from "../../assets/icons/sprite.svg";
import { ErrorComponent } from "../ErrorComponent";
import { LoadingSpinner } from "../LoadingSpinner";
import styles from "./Testimotinials.module.css";

const idMap = {
  "64c8d958249fae54bae90bb9": "John Dou",
  "64c8d958249fae54bae90bb8": "Mark Frost",
  "64c8d958249fae54bae90bb7": "John Loyd",
};
export const Testimonials = () => {
  const {
    data: testimonialsData = [],
    isFetching: testimonialsIsFetching,
    isLoading: testimonialsIsLoading,
    isError: testimonialsIsError,
    refetch: refetchTestimonials,
  } = useGetTestimonialsQuery();

  const isLoading = testimonialsIsFetching || testimonialsIsLoading;
  return (
    <div className={styles.container}>
      {isLoading && <LoadingSpinner className={styles.loading} />}
      {!isLoading && testimonialsIsError && (
        <ErrorComponent onRetry={refetchTestimonials} />
      )}
      {testimonialsData.length > 0 && (
        <>
          <span className={styles.tagline}>What our customer say</span>
          <h2 className={styles.headline}>TESTIMONIALS</h2>
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className={styles.swiper}
          >
            {testimonialsData.map((el) => (
              <SwiperSlide className={styles.swiperSlide}>
                <svg className={styles.svg}>
                  <use xlinkHref={`${sprite}#quote`} />
                </svg>
                <span className={styles.description}>{el.testimonial}</span>
                <span className={styles.owner}>{idMap[el.owner]}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
};
