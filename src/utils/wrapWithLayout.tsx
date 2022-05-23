import Layout from 'src/components/Layout';
import { WrapPageParams, WrappedPageProps } from 'src/utils';

export const wrapWithLayout = (Component: WrapPageParams['page']): WrapPageParams['page'] => {
  function Wrapper(props: WrappedPageProps) {
    return (
      <Layout {...{ ...props }}>
        <Component {...{ ...props }} />
      </Layout>
    );
  }

  return function (props) {
    return <Wrapper {...props} />;
  };
};
