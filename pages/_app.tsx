import 'public/styles/globals.css';
import 'public/styles/variables.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { useEffect, useState } from 'react';
import { ObjectAlias } from 'types';

Router.events.on('routeChangeStart', (url) => {
  console.log(url);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  // Это небольшой костыль для запоминания предыдущих глобальных пропсов.
  // Дело в том, что при переходе на новую страницу, getServerSideProps не отработает, нам вернется пустой объект
  // const [props, setProps] = useState<ObjectAlias | undefined>(undefined);
  // useEffect(() => {
  //   if (Object.keys(pageProps as ObjectAlias).length) {
  //     setProps(pageProps as ObjectAlias);
  //   }
  // }, [pageProps]);

  return (
    <>
      {/* <NotificationProvider> */}
      <Component {...pageProps} />
      {/* <NotificationsBox /> */}
      {/* </NotificationProvider> */}
    </>
  );
}

export default MyApp;
