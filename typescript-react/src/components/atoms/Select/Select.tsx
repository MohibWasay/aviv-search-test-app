import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

import styles from './select.module.scss';

import { create } from '@/common/createBem';

const bem = create(styles, 'Select');

type Option = {
  value: string;
  label: string;
};

export type SelectProps = InputHTMLAttributes<HTMLSelectElement> & {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  options: Option[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ description, errorMessage, ...props }, ref) => {
    return (
      <div className={bem()}>
        <label htmlFor={props.name}>Building type:</label>
        <select className={bem('field')} ref={ref} name={props.name}>
          {props.options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {description ? (
          <span className={bem('description')}>{description}</span>
        ) : null}
      </div>
    );
  },
);
