import { useLocation } from 'react-router-dom';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { SpriteSVG } from '@/assets/icons/SpriteSVG';
import Button from '../Button';
import Input from '../InputFields/Input';
import styles from './UserFilter.module.scss';

interface IPropsUserFilter {
  placeholder: string;
  onFilter: (value: string, page: number) => void;
}

const UserFilter = ({ placeholder, onFilter }: IPropsUserFilter) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = searchParams.get('page') || 1;

  const [filterValue, setFilterValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };
  const handleFilterSubmit = () => {
    if (!filterValue.trim()) {
      toast.error('Please enter filter value!');
      return;
    }
    onFilter(filterValue, Number(currentPage));
    toast.success('Filter applied successfully!');
  };
  const handleClearInput = () => {
    setFilterValue('');
    onFilter('', 1);
    toast.success('Filter cleared successfully!');
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleFilterSubmit();
    }
  };

  return (
    <div className={styles.sectorInput}>
      <div className={styles.inputDiv}>
        <Input
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
