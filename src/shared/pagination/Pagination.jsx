import { useSelector } from 'react-redux';
import styles from './Pagination.module.scss';
import { selectCurrentPage } from '../../redux/Orders/sliceOrders';

 const Pagination = ({ totalPages, onPageChange }) => {
  const currentPage = useSelector(selectCurrentPage);

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };
  const currentPageStyle = (pageNumber) => {
    return pageNumber === currentPage ? styles.selected : styles.page;
  };
  if (totalPages === 0) {
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