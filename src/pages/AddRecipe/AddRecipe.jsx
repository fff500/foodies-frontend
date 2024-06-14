import { Container } from '../../components/layout';

import { AddRecipeForm, MainTitle, Subtitle } from '../../components';

import styles from './AddRecipe.module.css';

const AddRecipe = () => {
  return (
    <div className={styles.pageWrapper}>
      <Container>
        <MainTitle className={styles.pageTitle}>AddRecipe</MainTitle>
        <Subtitle className={styles.pageDescription}>
          Reveal your culinary art, share your favorite recipe and create
          gastronomic masterpieces with us.
        </Subtitle>
        <AddRecipeForm />
      </Container>
    </div>
  );
};

export default AddRecipe;
