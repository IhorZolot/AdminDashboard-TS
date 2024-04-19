import styles from './Table.module.scss';

const Table = ({ nameTable, headers, rows }) => {
  return (
    <div className={styles.sectionTable}>
      <h2 className={styles.titleTable}>{nameTable}</h2>
      <table className={styles.table}>
        <thead className={styles.theadTable}>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.dataTable}>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <div>
                  {row.image && <img width="40" src={row.image} alt="img" />}
                  {row.name}
                </div>
              </td>
              <td>{row.email}</td>
              <td>{row.address}</td>
              <td>{row.phone}</td>
              <td>{row.register_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
