import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function NewPost(props) {
  console.log("NEW POST PROPS: ", props);
    return (
    <div>
      <h1>this is the new post page</h1>
    </div>
    )
  }

  export const getServerSideProps = withPageAuthRequired(() => {
    return {
      props: {},
    };
  });
  