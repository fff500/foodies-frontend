import { Testimonials, Container, Hero, Categories } from "../../components";
import {
  useGetAreasQuery,
  useGetIngredientsQuery,
  useGetTestimonialsQuery,
} from "../../redux/";
import { PrivateLink } from "../../components/shared/PrivateLink";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // TODO: Delete this
  // INFO: How to retrieve data from requests
  const navigate = useNavigate();
  const {
    data: ingredientsData,
    isFetching: ingredientsIsFetching,
    isLoading: ingredientsIsLoading,
    isError: ingredientsIsError,
  } = useGetIngredientsQuery();

  const {
    data: areasData,
    isFetching: areasIsFetching,
    isLoading: areasIsLoading,
    isError: areasIsError,
  } = useGetAreasQuery();

  const {
    data: testimonialsData,
    isFetching: testimonialsIsFetching,
    isLoading: testimonialsIsLoading,
    isError: testimonialsIsError,
  } = useGetTestimonialsQuery();

  console.log({
    ingredientsData: {
      ingredientsIsLoading,
      ingredientsIsFetching,
      ingredientsData,
      ingredientsIsError,
    },
    testimonialsData: {
      testimonialsIsLoading,
      testimonialsIsFetching,
      testimonialsData,
      testimonialsIsError,
    },
    areasData: {
      areasIsLoading,
      areasIsFetching,
      areasData,
      areasIsError,
    },
  });
  return (
    <>
      <PrivateLink to={"/user"} />
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Log out
      </button>
      <Container wide>
        <Hero />
      </Container>
      <Container>
        <Categories />
      </Container>
      <Container>
        <Testimonials />
      </Container>
    </>
  );
};

export default Home;
