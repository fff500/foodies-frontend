import { Testimonials, Container, Hero, Categories } from "../../components";
import { ReduxModal } from "../../components/shared/ReduxModal/ReduxModal";
import { useSelector } from "react-redux";

const Home = () => {
  const { modalType } = useSelector((state) => state.modal);

  return (
    <>
      <Container wide>
        <Hero />
      </Container>
      <Container>
        <Categories />
      </Container>
      <Container>
        <Testimonials />
      </Container>
      <ReduxModal key={modalType} />
    </>
  );
};

export default Home;
