import { Testimonials, Container, Hero, Categories } from "../../components";

const Home = () => {
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
    </>
  );
};

export default Home;
