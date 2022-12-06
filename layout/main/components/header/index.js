import React, { useState } from "react";

import { useRouter } from "next/router";

import Link from "next/link";

import Image from "next/image";

import { Container } from "react-bootstrap";

import { useTranslation } from "next-i18next";

const links = [
  {
    path: "/",
    name: "link_home",
  },
  {
    path: "/about",
    name: "link_about",
  },
  {
    path: "/trade",
    name: "link_trade",
    type: "url",
    url: "https://trade.otix.exchange",
  },
  // {
  //   path: "/foreign-trade",
  //   name: "link_foreign_trade",
  // },
  {
    path: "/quick-trade",
    name: "link_quick_trade",
    type: "url",
    url: "https://trade.otix.exchange/buysell",
  },
  {
    path: "/market",
    name: "link_market",
  },
  {
    path: "/fees",
    name: "link_fees",
  },
];

const NavLinks = ({ links, style }) => {
  const { t } = useTranslation(["header"]);
  return links.map((link, index) =>
    link.type === "url" ? (
      <a
        href={link.url}
        rel="noreferrer"
        key={index}
        className="link-item text-capitalize"
        style={style}
        target="_blank"
      >
        {t(link.name)}
      </a>
    ) : (
      <Link
        href={link.path}
        className="link-item text-capitalize"
        key={index}
        style={style}
      >
        {t(link.name)}
      </Link>
    )
  );
};

const SignBtn = ({ classes, style, url, type, title }) => {
  const { t } = useTranslation(["header"]);
  return type === "url" ? (
    <a
      href={url}
      rel="noreferer"
      className={`login-btn d-lg-flex align-items-center justify-content-center text-capitalize ${classes}`}
      style={style}
    >
      {" "}
      {t(title)}
    </a>
  ) : (
    <Link
      href={url}
      className={`login-btn d-lg-flex align-items-center justify-content-center text-capitalize ${classes}`}
      style={style}
    >
      {t(title)}
    </Link>
  );
};

export default function Header() {
  const { locale, pathname, locales } = useRouter();

  const [menuIsOPen, setMenuIsOpen] = useState(false);

  const getOtherLang = locales.filter((lang) => lang !== locale).join("");

  const toggleMenu = () => setMenuIsOpen((prev) => !prev);

  return (
    <header className="main-header d-flex align-items-center">
      <Container className="d-flex align-items-center justify-content-between">
        {/* links  */}
        <div className="d-flex align-items-center">
          {/* logo  */}
          <Link href="/">
            <Image
              src="/assets/imgs/logo.webp"
              width={114}
              height={50}
              alt="logo"
              className="img-fluid"
            />
          </Link>
          <div className="links d-none d-lg-flex">
            <NavLinks links={links} />
          </div>
        </div>
        {/* sign  */}
        <div className="d-flex align-items-center">
          <SignBtn
            classes="d-none"
            url="https://trade.otix.exchange/registration"
            type="url"
            title="link_login"
          />
          <SignBtn
            classes="d-none"
            url="https://trade.otix.exchange/registration"
            type="url"
            title="link_register"
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "var(--bs-white)",
              minWidth: "100px",
            }}
          />
          <Link
            href={pathname}
            locale={getOtherLang}
            className="bg-transparent border-0 p-0 m-0 lang-btn text-capitalize"
          >
            {locale === "en" ? "العربية" : "english"}
          </Link>

          <button
            className="bg-transparent border-0 p-0 menu-btn d-lg-none"
            onClick={toggleMenu}
          >
            <i className="las la-bars"></i>
          </button>
        </div>
      </Container>
      <div className={`menu-mobile d-lg-none ${menuIsOPen ? "active" : ""}`}>
        <div
          className="menu-mobile-inner"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        ></div>
        <div className="content d-flex flex-column">
          <div>
            <NavLinks
              links={links}
              style={{
                display: "block",
                color: "var(--dark)",
                marginBottom: "var(--space-md)",
                borderBottom: "1px solid rgba(0, 0, 0, .07)",
                paddingBottom: "var(--space-sm)",
              }}
            />
          </div>
          <SignBtn
            classes="d-flex mt-auto"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--bs-white)",
            }}
            url="https://trade.otix.exchange/registration"
            type="url"
            title="link_register"
          />
        </div>
      </div>
    </header>
  );
}
