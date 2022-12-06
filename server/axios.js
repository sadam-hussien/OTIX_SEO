export default function Api(axios, store) {
  // const {
  //   auth: { user },
  // } = store.getState();
  const appClient = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      // Authorization: `Bearer ${user ? user.accessToken : null}`,
      Accept: "application/json",
      ContentType: "application/json",
      "Accept-Language": "en",
      "Content-Language": "en",
    },
  });
  appClient.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log("error response", error);
      return Promise.reject(error);
    }
  );

  return appClient;
}
