import { useEffect, useState } from "react";

import ScrollToTop from "../ScrollToTop";

import { Header, Footer, CookiesCard } from "./components";

import Cookies from "js-cookie";

export default function MainLayout({ children }) {
  const getCookie = Cookies.get("cookie");
  const [hasCookie, setHasCookie] = useState(null);
  useEffect(() => {
    if (getCookie) {
      setHasCookie(getCookie);
    }
  }, []);
  return (
    <ScrollToTop>
      <div className="main-layout">
        <Header />
        <main className="page-content">{children}</main>
        <Footer />
        {!hasCookie ? <CookiesCard /> : <></>}
      </div>
    </ScrollToTop>
  );
}
