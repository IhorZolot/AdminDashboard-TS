import { SpriteSVG } from '../../../assets/icons/SpriteSVG';
import Button from '../Button';
import Input from '../InputFields/Input';
import styles from './UserFilter.module.scss';
import { useState } from 'react';
const UserFilter = ({ placeholder, onFilter }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleFilterClick = () => {
    onFilter(filterValue);
    setFilterValue('');
  };

  return (
    <div className={styles.sectorInput}>
      <Input
        type="text"
        placeholder={placeholder}
        value={filterValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleFilterClick}>
        <SpriteSVG name="filter" /> Filter
      </Button>
    </div>
  );
};

export default UserFilter;
