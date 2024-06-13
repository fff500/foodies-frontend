import {
  Testimonials,
  Container,
  Hero,
  Categories,
  Recipes,
} from "../../components";

const Home = () => {
  return (
    <>
      <Container wide>
        <Hero />
      </Container>
      <Container>
        <Recipes />
      </Container>
      <Container>
        <Testimonials />
      </Container>
    </>
  );
};

export default Home;
