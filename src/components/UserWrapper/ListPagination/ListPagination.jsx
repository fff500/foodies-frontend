import styles from "./ListPagination.module.css";

export const ListPagination = ({ setPage, totalCount, page }) => {
  let pages = [];

  if (totalCount) {
    const totalPages = Math.ceil(totalCount / 20);

    pages = [...Array(totalPages).keys()].map((i) => i + 1);

    if (totalPages === 0) {
      return null;
    }
  }

  return (
    <nav className={styles.pagination}>
      {pages.map((pageNum) => (
        <button
          key={pageNum}
          className={`${styles.paginationButton} ${
            page === pageNum ? styles.activePage : ""
          }`}
          onClick={() => setPage(pageNum)}
        >
          {pageNum}
        </button>
      ))}
    </nav>
  );
};
