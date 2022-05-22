import classNames from 'classnames';
import { Path, RegisterOptions, UseFormReturn } from 'react-hook-form';
import { Box } from 'src/components/Box';
import Checkmark from 'src/components/Icon/assets/checkMark.svg';

import styles from './styles.module.css';

export type CheckboxProps<FormType> = {
  label?: JSX.Element | string;
  labelText?: string;
  name: Path<FormType>;
  form: UseFormReturn<FormType>;
  params?: RegisterOptions;
  className?: {
    wrapper?: string;
    input?: string;
    label?: string;
  };
  errorText?: string;
};

export function Checkbox<FormType>(props: CheckboxProps<FormType>): JSX.Element {
  const { label, labelText, errorText, name, form, params, className = {} } = props;

  const { register, watch } = form;

  return (
    <div className={classNames(styles.checkbox)}>
      <input
        className={styles.checkboxTag}
        type="checkbox"
        {...register(name, params)}
        id={`checkbox${name}`}
      />

      <label
        htmlFor={`checkbox${name}`}
        title={labelText}
        className={classNames(styles.label, className.label)}
        id={`checkbox${name}`}
      >
        <Box
          className={classNames(styles.fake, {
            [styles.checked]: watch(name),
          })}
        >
          {watch(name) ? <Checkmark color="white" /> : null}
        </Box>

        <div className={styles.labelContent}>{label}</div>
      </label>

      {Boolean(errorText) && <span className={styles.error}>{errorText}</span>}
    </div>
  );
}
