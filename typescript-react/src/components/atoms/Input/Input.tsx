import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { PredicateSet } from 'react-bem-helper';

import styles from './input.module.scss';

import { create } from '@/common/createBem';

export const bem = create(styles, 'Input');

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { errorMessage, disabled, label, description, ...rest } = props;

  const inputClassName = bem('field', {
    'is-disabled': disabled,
    'has-error': !!errorMessage,
  } as PredicateSet);

  const descriptionClassName = bem('description', {
    'has-error': !!errorMessage,
  } as PredicateSet);

  const labelClassName = bem('label', {
    'has-error': !!errorMessage,
  } as PredicateSet);

  return (
    <div className={bem()}>
      {label ? (
        <label className={labelClassName} htmlFor={props.name}>
          {label}:{' '}
        </label>
      ) : null}
      <input ref={ref} className={inputClassName} {...rest} />
      {errorMessage && (
        <span className={descriptionClassName}>{errorMessage}</span>
      )}
      {!errorMessage && description ? (
        <span className={descriptionClassName}>{description}</span>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';
