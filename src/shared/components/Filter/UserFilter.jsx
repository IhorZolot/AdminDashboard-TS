import { useLocation } from 'react-router-dom';
import { SpriteSVG } from '../../../assets/icons/SpriteSVG';
import Button from '../Button';
import Input from '../InputFields/Input';
import styles from './UserFilter.module.scss';
import { useState } from 'react';

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
      return;
    }
    onFilter(filterValue, currentPage);
    setFilterValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleFilterSubmit();
    }
  };

  return (
    <div className={styles.sectorInput}>
      <Input
        type="text"
        placeholder={placeholder}
        value={filterValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleFilterSubmit}>
        <SpriteSVG name="filter" /> Filter
      </Button>
    </div>
  );
};

export default UserFilter;
