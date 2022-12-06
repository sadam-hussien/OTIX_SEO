import { appWithTranslation } from "next-i18next";

import SSRProvider from "react-bootstrap/SSRProvider";

import MainLayout from "layout/main";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    );
  }
  return (
    <SSRProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SSRProvider>
  );
}

export default appWithTranslation(MyApp);
