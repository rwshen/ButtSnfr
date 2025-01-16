export const getOAuthToken = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        "grant_type": "client_credentials",
        "client_id": `${process.env.GATSBY_USPS_CLIENT_ID}`,
        "client_secret": `${process.env.GATSBY_USPS_CLIENT_SECRET}`,
      }),
    };
    return await fetch(`https://api.usps.com/oauth2/v3/token`, requestOptions)
      .then(response => response.json())
      .catch(error => {
        console.error("\n\n\n\n OAuth Request Error:", error);
      });
  }
  

  
  