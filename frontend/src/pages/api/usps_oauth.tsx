export const getOAuthToken = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json")

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      "grant_type": "client_credentials",
      "client_id": `${process.env.USPS_CLIENT_ID}`,
      "client_secret": `${process.env.USPS_CLIENT_SECRET}`,
    }),
  };
  const res = await fetch(`https://api.usps.com/oauth2/v3/token`, requestOptions)
    .then(response => response.json())
    .catch(error => {
      console.error("\n\n\n\n OAuth Request Error:", error);
    });

    return await res
}

export async function getStaticProps(context) {
 let { access_token } = await getOAuthToken();
 console.log('\n\n\n\n access_token', access_token)
  return {
    props: {
      token: access_token,
    },
  };
}


