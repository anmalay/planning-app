import classNames from 'classnames';
import { Box, Button, Icon, Text } from 'src/common';
import useBodyModal from 'src/utils/useBodyModal';
import useRandomDOMId from 'src/utils/useRandomDOMId';

import styles from './styles.module.css';

export type ModalProps = {
  children: JSX.Element | JSX.Element[];
  visible: boolean;
  title?: string;
  onVisibleChange?: (visibility: boolean) => void;
  className?: string;
};

export function Modal({
  children,
  visible,
  title,
  onVisibleChange,
  className = '',
}: ModalProps): JSX.Element {
  const modalId = useRandomDOMId('modal');
  const bodyModal = useBodyModal(visible);

  if (!visible) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  return (
    <div
      className={classNames(styles.wrapper, { [styles.visible]: bodyModal })}
      role="dialog"
      id={modalId}
      aria-labelledby={`${modalId}_label`}
      aria-modal="true"
    >
      <div className={styles.backdrop} onClick={() => onVisibleChange && onVisibleChange(false)} />

      <div
        className={classNames(className, styles.modal, styles.withTitle)}
        id={`${modalId}_label`}
      >
        {title ? (
          <Box className={styles.heading} id={`${modalId}_label`}>
            <Text style={{ maxWidth: 'calc(100% - 32px)' }}>{title}</Text>

            <Button
              variant="text"
              className={{ wrapper: styles.button }}
              onClick={() => onVisibleChange && onVisibleChange(false)}
            >
              <Icon name="Close" />
            </Button>
          </Box>
        ) : (
          <Button
            variant="text"
            className={{ wrapper: styles.button }}
            onClick={() => onVisibleChange && onVisibleChange(false)}
          >
            <Box
              className={styles.closeBtn}
              styles={{
                width: '24px',
                height: '24px',
                backgroundColor: 'var(--color-background-gray-100)',
              }}
            >
              <Icon name="Close" size={12} />
            </Box>
          </Button>
        )}

        {children}
      </div>
    </div>
  );
}
