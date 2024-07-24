import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { SpriteSVG } from '@/assets/icons/SpriteSVG';
import Button from '../Button';
import Input from '../InputFields/Input';
import styles from './UserFilter.module.scss';

const UserFilter = ({ placeholder, onFilter }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = searchParams.get('page') || 1;

  const [filterValue, setFilterValue] = useState('');

  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };
  const handleFilterSubmit = () => {
    if (!filterValue.trim()) {
      toast.error('Please enter filter value!');
      return;
    }
    onFilter(filterValue, currentPage);
    toast.success('Filter applied successfully!');
  };
  const handleClearInput = () => {
    setFilterValue('');
    onFilter('', 1);
    toast.success('Filter cleared successfully!');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleFilterSubmit();
    }
  };

  return (
    <div className={styles.sectorInput}>
      <div className={styles.inputDiv}>
        <Input
          type="text"
          placeholder={placeholder}
          value={filterValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className={styles.inputField}
        />
        {filterValue && (
          <button className={styles.clearButton} onClick={handleClearInput}>
            &#x2715;
          </button>
        )}
      </div>

      <Button onClick={handleFilterSubmit}>
        <SpriteSVG name="filter" /> Filter
      </Button>
    </div>
  );
};

export default UserFilter;
