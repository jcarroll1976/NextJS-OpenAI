import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../../components/AppLayout/AppLayout";

export default function NewPost(props) {
  console.log("NEW POST PROPS: ", props);
    return (
    <div>
      <h1>this is the new post page</h1>
    </div>
    )
  }

  NewPost.getLayout = function getLayout(page,pageProps) {
    return <Layout {...pageProps}>{page}</Layout>
  }
  
  export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: {},
    };
  });
  