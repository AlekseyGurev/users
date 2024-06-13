import { PaginationType } from '../../models';
import styles from './Pagination.module.css';

export const Pagination = ({
  page,
  onClickBack,
  onClickForward,
  totalPage,
  defaultPage,
}: PaginationType) => {
  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.button} ${styles.buttonBack}`}
        onClick={onClickBack}
        disabled={page === defaultPage ? true : false}
      ></button>
      <button
        className={`${styles.button} ${styles.buttonForward}`}
        onClick={onClickForward}
        disabled={+page === totalPage ? true : false}
      ></button>
    </div>
  );
};
