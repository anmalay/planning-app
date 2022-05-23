import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { Box } from 'src/common';
import { withProfile } from 'src/utils/withProfile';
import { WrappedPageProps } from 'src/utils/wrapPage';

import styles from './styles.module.css';

function Layout({
  profile,
  isDev,
  baseUrl,
  children,
}: WrappedPageProps<{ children: ReactNode }>): JSX.Element {
  // const [visibleSidebar, setVisibleSidebar] = useState(false);

  return (
    <div className={styles.pageWrap}>
      {/* <MainHead /> */} Head
      {/* <Header profile={profile} isDev={isDev} baseUrl={baseUrl} /> */} Header
      <Box className={styles.wrapper} flexDirection="row">
        {/* <Sidebar visibleSidebar={visibleSidebar} setVisibleSidebar={setVisibleSidebar} /> */}
        <main
          className={classNames({
            [styles.main]: true,
            // [styles.mainClosed]: visibleSidebar,
          })}
        >
          {children}
        </main>
      </Box>
      {/* <Footer /> */} Footer
    </div>
  );
}

export default Layout;

export const getServerSideProps = withProfile(
  (profile) => ({
    props: {
      profile,
      isDev: process.env.IS_DEV === 'true',
      baseUrl: process.env.FRONTEND_ADDRESS || '',
    },
  }),
  { onlyWithSession: true },
);
