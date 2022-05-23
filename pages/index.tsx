import { GetServerSidePropsContext } from 'next';
import { HomePage } from 'src/components/pages/HomePage';
import { withProfile, wrapPage, wrapWithLayout } from 'src/utils';

// module.exports = wrapPage({
//   page: wrapWithLayout(HomePage),
//   options: {
//     onlyWithSession: false,
//   },
// });

function Home() {
  return <HomePage />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {},
  };
}

export default Home;
