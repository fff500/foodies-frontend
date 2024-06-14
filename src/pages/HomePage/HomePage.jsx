import { Testimonials, Container, Hero, Categories } from "../../components";

const HomePage = () => {
  return (
    <>
      <Container wide>
        <Hero />
        <Categories />
        <Testimonials />
      </Container>
    </>
  );
};

export default HomePage;
