import { LayoutProps } from '../../models';
import styles from './FieldsetContainer.module.css';
export const FieldsetContainer = ({ children }: LayoutProps) => {
  return <fieldset className={styles.containerForm}>{children}</fieldset>;
};
