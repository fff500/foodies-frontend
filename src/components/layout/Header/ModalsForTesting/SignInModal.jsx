import styles from "./Modal.module.css";

const SignInModal = ({ isOpen, onClose, onSignIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn(); // Викликаємо onSignIn після натискання на кнопку Sign In
    onClose(); // Закриваємо модалку
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
