import classNames from 'classnames';
import { memo, useState } from 'react';

import { Box } from '../Box';
import { Text } from '../Text';
import styles from './styles.module.css';

export type TabItem = {
  id: string;
  title: string;
  content: JSX.Element;
};

export type TabsProps = {
  items: TabItem[];
  onTabChange?: (id: string) => void;
};

export const Tabs = memo(({ items, onTabChange }: TabsProps): JSX.Element => {
  if (!items.length) {
    throw new Error('Items array should contain at least 1 item');
  }

  const [currentTab, setCurrentTab] = useState(items[0].id);
  const current = items.find((i) => i.id === currentTab);

  return (
    <Box flexDirection="column" className={styles.tabsRoot}>
      <Box className={styles.tabsBox}>
        {items.map((item) => (
          <Box
            key={item.id}
            className={classNames({
              [styles.tabsItem]: true,
              [styles.active]: item.id === currentTab,
            })}
            onClick={() => {
              setCurrentTab(item.id);
              if (onTabChange) {
                onTabChange(item.id);
              }
            }}
            justifyContent="center"
            alignItems="center"
          >
            <Text color="INHERIT" className={styles.tabName}>
              {item.title}
            </Text>
          </Box>
        ))}
      </Box>

      <Box className={styles.tabContentRoot}>{current?.content}</Box>
    </Box>
  );
});
