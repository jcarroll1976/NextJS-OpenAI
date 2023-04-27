import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../components/AppLayout/AppLayout";

export default function TokenTopup() {
    return (
    <div>
      <h1>this is the token topup page</h1>
    </div>
    )
  }

  TokenTopup.getLayout = function getLayout(page,pageProps) {
    return <Layout {...pageProps}>{page}</Layout>
  }

  export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: {},
    };
  });