import { ErrorMessage, FieldValuesFromFieldErrors } from '@hookform/error-message';
import classNames from 'classnames';
import React, { useState } from 'react';
import {
  Controller,
  DeepMap,
  DeepPartial,
  FieldError,
  FieldName,
  Path,
  RegisterOptions,
  UseFormReturn,
} from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Dropdown } from 'src/components/Dropdown';
import { Icon } from 'src/components/Icon';
import { IconName } from 'src/components/Icon/types';
import { CSSColors } from 'src/types';

import { codesData } from './codesData';
import styles from './styles.module.css';

export type InputProps<FormType> = {
  name: Path<FormType>;

  form: UseFormReturn<FormType>;
  icon?: IconName;
  iconColor?: CSSColors;
  mask?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  params?: RegisterOptions;
  modificatorName?: Path<FormType>;
  className?: {
    wrapper?: string;
    input?: string;
    placeholder?: string;
    dropdown?: string;
  };
  errorText?: string;
};

export function Input<FormType>({
  name,
  form,
  icon,
  iconColor,
  mask,
  type = 'text',
  modificatorName,
  params,
  placeholder = 'Placeholder',
  className = {},
  errorText,
}: InputProps<FormType>): JSX.Element {
  const [hidden, setHidden] = useState(type === 'password');
  const {
    register,
    control,
    formState: { errors },
  } = form;

  const phoneCodes = codesData.map((item) => ({
    id: item.id,
    value: item.hint,
    icon: item.icon,
    name: item.name,
  }));

  const calculatedType = type === 'password' && hidden ? type : 'text';
  const inputClassname = classNames(
    styles.inputElement,
    {
      [styles.withIcon]: icon !== undefined,
      [styles.withMod]: modificatorName !== undefined,
    },
    className.input,
  );

  const hiddenBtn = type === 'password' && (
    <div className={styles.inputHiddenBtn} onClick={() => setHidden((prev) => !prev)}>
      <Icon size={24} name={hidden ? 'EyeOn' : 'EyeOff'} />
    </div>
  );

  const iconElm = icon !== undefined && (
    <div className={styles.icon}>
      <Icon name={icon} size={24} color={iconColor} />
    </div>
  );

  const dropdown = phoneCodes && modificatorName && (
    <div className={styles.iconWithMod}>
      <Dropdown
        variant="text"
        placeholder="ru"
        items={phoneCodes}
        name={modificatorName}
        form={form}
        modificator="code"
        className={{ wrapper: className.dropdown }}
      />
    </div>
  );

  let input = null;
  if (mask) {
    // Данное решение было взято из
    // https://github.com/react-hook-form/react-hook-form/issues/1255#issuecomment-601939120
    input = (
      <Controller
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <>
            {dropdown}

            <InputMask
              mask={mask}
              onChange={onChange}
              onBlur={onBlur}
              value={value as string}
              name={name}
              inputRef={ref}
              placeholder={' '}
              id={`input_${name}`}
              className={inputClassname}
              type={calculatedType}
            />
          </>
        )}
        control={control}
        name={name}
      />
    );
  } else {
    input = (
      <input
        placeholder={' '}
        id={`input_${name}`}
        className={inputClassname}
        type={calculatedType}
        {...register(name, params)}
      />
    );
  }

  return (
    <div className={classNames(styles.inputWrapper, className.wrapper)}>
      {iconElm}

      {input}

      <label
        htmlFor={`input_${name}`}
        className={classNames(
          styles.placeholder,
          {
            [styles.withIcon]: icon !== undefined,
            [styles.withMod]: modificatorName !== undefined,
            [styles.withError]: Boolean(errorText),
          },
          className.placeholder,
        )}
      >
        {placeholder}
      </label>

      {hiddenBtn}

      <ErrorMessage
        errors={errors}
        name={
          name as unknown as FieldName<
            FieldValuesFromFieldErrors<DeepMap<DeepPartial<FormType>, FieldError>>
          >
        }
        render={({ message }) => (
          <div className={styles.errorBox}>
            <Icon size={12} color={CSSColors.otherRed} name="Attention" />
            <span className={styles.error}>{message}</span>
          </div>
        )}
      />
    </div>
  );
}
