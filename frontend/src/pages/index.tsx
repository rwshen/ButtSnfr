import { Register } from "./api/Register";
import { getOAuthToken } from "./api/usps_oauth";

export default function Index(props) {
    return (
      <div
        className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      >
        <Register token={JSON.stringify(props.token)}  />
      </div>
    );
  }
  
  export async function getStaticProps() {
   const { access_token } = await getOAuthToken();
   console.log('\n\n\n\n access_token', access_token)
    return {
      props: {
        token: access_token,
      },
    };
  }
