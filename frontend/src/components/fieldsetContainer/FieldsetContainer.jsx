import styles from './FieldsetContainer.module.css';
export const FieldsetContainer = ({ children }) => {
  return <fieldset className={styles.containerForm}>{children}</fieldset>;
};
