import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetTestimonialsQuery } from "../../redux";
import { ErrorComponent, Icon, LoadingSpinner } from "../shared";
import styles from "./Testimotinials.module.css";

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
          <h3 className={styles.tagline}>What our customer say</h3>
          <h2 className={styles.headline}>TESTIMONIALS</h2>
          <div className={styles.sliderContainer}>
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
                <SwiperSlide className={styles.swiperSlide} key={el._id}>
                  <Icon id="quote" className={styles.svg} />
                  <span className={styles.description}>{el.testimonial}</span>
                  <span className={styles.owner}>{el?.owner?.name}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};
