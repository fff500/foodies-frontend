import styles from "./ListPagination.module.css";

export const ListPagination = ({ setPage, totalCount, page }) => {
  let pages = [];

  if (totalCount) {
    const totalPages = Math.ceil(totalCount / 20);

    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(totalPages, page + 2);

    if (endPage - startPage + 1 < 5) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + 4);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, endPage - 4);
      }
    }

    pages = [...Array(endPage - startPage + 1).keys()].map(
      (i) => startPage + i
    );

    if (startPage > 1) {
      pages.unshift("...");
    }

    if (endPage < totalPages) {
      pages.push("...");
    }

    if (totalPages === 0) {
      return null;
    }
  }

  return (
    <nav className={styles.pagination}>
      {pages.map((pageNum, index) => (
        <button
          key={index}
          className={`${styles.paginationButton} ${
            pageNum === page ? styles.activePage : ""
          }`}
          onClick={() => {
            setPage(pageNum);
          }}
        >
          {pageNum}
        </button>
      ))}
    </nav>
  );
};
