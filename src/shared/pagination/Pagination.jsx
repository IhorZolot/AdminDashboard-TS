import styles from './Pagination.module.scss';

 const Pagination = ({ totalPages, onPageChange, currentPage }) => {

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };
  const currentPageStyle = (pageNumber) => {
    return pageNumber === currentPage ? styles.selected : styles.page;
  };
  
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      {Array(totalPages)
        .fill('')
        .map((_, index) => (
          <button
            key={index}
            className={currentPageStyle(index + 1)}
            onClick={() => handlePageClick(index + 1)}
          />
        ))}
    </div>
  );
};
export default Pagination;