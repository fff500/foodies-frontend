import {
  Container,
  AddRecipeForm,
  MainTitle,
  Subtitle,
} from '../../components';
import styles from './AddRecipePage.module.css';

const AddRecipePage = () => {
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

export default AddRecipePage;
