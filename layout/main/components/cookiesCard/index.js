import { useState } from "react";

import { Btn } from "components";

import { Container } from "react-bootstrap";

import { useTranslation } from "next-i18next";

import Link from "next/link";

import Cookies from "js-cookie";

export default function CookiesCard() {
  const { t } = useTranslation(["global"]);
  const [isShow, setIsShow] = useState(true);
  const handleCookie = () => {
    setIsShow(false);
    Cookies.set("cookie", true);
  };
  return (
    <div className={`cookies-card ${isShow ? "active" : "no-active"}`}>
      <Container>
        <div className="cookies-card-item">
          <h3 className="cookie-title text-capitalize">{t("allow_cookie")}</h3>
          <p className="cookie-desc">
            {t("we_use_cookie")}{" "}
            <Link href="/cookie-policy">{t("link_otix_cookie_policy")}</Link>
          </p>
          <div className="d-flex align-items-center justify-content-end gap-3">
            <Btn
              onClick={handleCookie}
              name={t("ok")}
              // classes="flex-fill"
              style={{
                // backgroundColor: "transparent",
                minWidth: 200,
                // color: "var(--dark)",
                // borderColor: "var(--dark)",
              }}
            />
            <Btn
              name={t("cancel")}
              onClick={handleCookie}
              // classes="flex-fill"
              style={{
                backgroundColor: "transparent",
                minWidth: 200,
                color: "var(--dark)",
                border: "1px solid var(--dark)",
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
