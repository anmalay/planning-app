import 'rc-dropdown/assets/index.css';

import classNames from 'classnames';
import DropdownWrapper from 'rc-dropdown';
import { useState } from 'react';
import {
  Path,
  PathValue,
  RegisterOptions,
  UnpackNestedValue,
  UseFormReturn,
} from 'react-hook-form';
import { Box } from 'src/components/Box';
import { Icon } from 'src/components/Icon';
import { IconName } from 'src/components/Icon/types';
import { Text } from 'src/components/Text';
import { CSSColors } from 'src/types';

import styles from './styles.module.css';

export type DropdownItem = {
  id: string;
  value: string;
  icon?: IconName;
  variant?: string;
  name?: string;
};

export type DropdownProps<FormType> = {
  items: DropdownItem[];
  name: Path<FormType>;
  form: UseFormReturn<FormType>;
  placeholder?: string;
  params?: RegisterOptions;
  multiselect?: boolean;
  disabled?: boolean;
  variant?: 'text';
  modificator?: 'code' | 'country';
  className?: {
    wrapper?: string;
  };
};

export function Dropdown<FormType>({
  items,
  name,
  variant,
  form,
  placeholder,
  params,
  modificator,
  className = {},
  multiselect,
  disabled,
}: DropdownProps<FormType>): JSX.Element {
  const [opened, setOpened] = useState(false);
  const { register, watch, setValue } = form;
  register(name, params);
  const value = watch(name) as string[];

  const [iconMod, setIconMod] = useState<IconName>('RuFlag');
  const [icon, setIcon] = useState<IconName>();

  const handleChange = (item: DropdownItem) => {
    type Value = UnpackNestedValue<PathValue<FormType, Path<FormType>>>;
    let nextValue: Value = [item.id] as Value;

    if (multiselect) {
      if (value.includes(item.id)) {
        nextValue = value.filter((i) => i !== item.id) as Value;
      } else {
        nextValue = [...value, item.id] as Value;
      }
    }

    setValue(name, nextValue);
  };

  const dropdownOverlay = (
    <Box
      flexDirection="column"
      className={classNames(styles.dropdownOverlay, {
        [styles.dropdownOverlayModif]: modificator,
      })}
    >
      <ul className={styles.listContainer}>
        {items.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <button
              type="button"
              onClick={() => {
                handleChange(item);
                if (item.icon) {
                  setIconMod(item.icon);
                  setIcon(item.icon);
                }
              }}
              className={classNames({
                [styles.itemBtn]: true,
                [styles.active]: value.includes(item.id),
                [styles.itemBtnModif]: modificator,
              })}
            >
              <Box gap={item.icon ? 20 : 0} flexDirection="row" alignItems="center">
                <Box alignItems="center" justifyContent="center">
                  {item.icon && <Icon name={item.icon} color={CSSColors.INHERIT} size={24} />}
                </Box>
                <Text variant="body" color="INHERIT">
                  {item.name}
                </Text>
              </Box>

              <Text variant="body" color="INHERIT">
                {item.value}
              </Text>
            </button>
          </li>
        ))}
      </ul>
    </Box>
  );

  return (
    <DropdownWrapper
      trigger={['click']}
      onVisibleChange={(value) => !disabled && setOpened(value)}
      visible={opened}
      animation="slide-up"
      overlay={dropdownOverlay}
    >
      <Box
        className={classNames(styles.dropdownRoot, {
          [styles.textRoot]: variant === 'text',
        })}
        flexDirection="column"
      >
        <button
          type="button"
          className={classNames(styles.dropdown, className.wrapper, {
            [styles.text]: variant === 'text',
          })}
          style={{
            border: (opened && !modificator && '2px solid var(--color-stroke-accent)') || '',
          }}
          onClick={() => setOpened((prev) => !prev)}
        >
          {modificator ? (
            <Icon name={iconMod} color={CSSColors.INHERIT} customWidth={32} customHeight={24} />
          ) : (
            <Box flexDirection="row" gap={8} alignItems="center" justifyContent="center">
              {icon && !modificator && (
                <Icon name={icon} color={CSSColors.INHERIT} customWidth={32} customHeight={24} />
              )}

              <Text color="INHERIT" variant="body">
                {value.length > 0 ? value.join(', ') : placeholder || name}
              </Text>
            </Box>
          )}

          <Icon
            name={opened ? 'ChevronUp' : 'ChevronDown'}
            color={CSSColors.INHERIT}
            size={modificator ? 8 : 18}
          />
        </button>
      </Box>
    </DropdownWrapper>
  );
}
