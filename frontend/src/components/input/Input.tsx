import { useState } from 'react';
import styles from './Input.module.css';
import { InputType } from '../../models';

export const Input = ({
  name,
  type = 'text',
  placeholder,
  title,
  register,
  formError,
}: InputType) => {
  const [isShowPAssword, setIsShowPAssword] = useState(true);

  return (
    <label htmlFor={name} className={styles.container}>
      <span>{title}</span>
      {type === 'password' ? (
        <>
          <input
            className={`${styles.input} ${formError ? styles.error : ''}`}
            type={isShowPAssword ? 'password' : 'text'}
            placeholder={placeholder}
            name={name}
            id={name}
            autoComplete="on"
            {...register(`${name}`)}
          />
          <button
            className={`${styles.eye} ${
              isShowPAssword ? styles.eyeClose : styles.eyeOpen
            }`}
            onClick={(event) => {
              event.preventDefault();
              setIsShowPAssword(!isShowPAssword);
            }}
          ></button>
        </>
      ) : (
        <input
          className={`${styles.input} ${formError ? styles.error : ''}`}
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          autoComplete="on"
          {...register(`${name}`)}
        />
      )}
    </label>
  );
};
