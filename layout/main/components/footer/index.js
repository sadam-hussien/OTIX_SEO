import Link from "next/link";

import { useTranslation } from "next-i18next";

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const links = [
  {
    title: "link_otix_title",
    logo: "assets/imgs/logo.webp",
    links: [
      // {
      //   path: "/about",
      //   name: "link_otix_about",
      // },
      {
        path: "/terms-and-conditions",
        name: "link_otix_terms",
      },
      {
        path: "/privacy-policy",
        name: "link_otix_privacy",
      },
      {
        path: "/gdpr-policy",
        name: "link_otix_gdpr",
      },
      {
        path: "/aml-policy",
        name: "link_otix_aml",
      },
      {
        path: "/risk-warning",
        name: "link_otix_risk_warning",
      },
      {
        path: "/conflict-policy",
        name: "link_otix_conflict_policy",
      },
      {
        path: "/complaints-policy",
        name: "link_otix_complaints_policy",
      },
      {
        path: "/code-ethics",
        name: "link_otix_code_ethics",
      },
      // {
      //   path: "/security",
      //   name: "link_otix_security",
      // },
    ],
  },
  {
    title: "link_services_title",
    links: [
      {
        path: "https://trade.otix.exchange",
        name: "link_services_trade",
        type: "url",
      },
      {
        path: "https://trade.otix.exchange/buysell",
        name: "link_services_quick_trade",
        type: "url",
      },
      {
        path: "/market",
        name: "link_services_market",
      },
      {
        path: "/referral",
        name: "link_services_referral",
      },
      {
        path: "/affiliate",
        name: "link_services_affiliate",
      },
      {
        path: "/vip",
        name: "link_services_vip_trade",
      },
      {
        path: "/otc",
        name: "link_services_otc",
      },
      {
        path: "https://trade.otix.exchange/account/api",
        name: "link_services_api",
        type: "url",
      },
    ],
  },
  {
    title: "link_learn_title",
    links: [
      {
        path: "/faq",
        name: "link_learn_faq",
      },
      {
        path: "/blog",
        name: "link_learn_blog",
      },
      {
        path: "/support",
        name: "link_learn_support",
      },
      {
        path: "/fees",
        name: "link_learn_fees",
      },
      {
        path: "/supported-token",
        name: "link_learn_supported_token",
      },
      {
        path: "/buy-bitcoin",
        name: "link_learn_supported_buy_bitcoin",
      },
      {
        path: "/buy-etherum",
        name: "link_learn_supported_buy_ethereum",
      },
      {
        path: "/buy-otix-token",
        name: "link_learn_supported_buy_otix_token",
      },
    ],
  },
];

export default function Footer() {
  const { t } = useTranslation(["footer"]);
  return (
    <footer>
      <div className="custom-shape-divider-bottom-1665400122">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer-content">
        <Container>
          <Row className="g-4">
            {links.map((item, index) => (
              <Col sm="6" lg="3" key={index}>
                <div className="links">
                  {item.logo ? (
                    <Image
                      width={90}
                      height={40}
                      src={"/" + item.logo}
                      alt="logo"
                      className="img-fluid head-logo"
                    />
                  ) : (
                    <h4 className="links-title text-capitalize">
                      {t(item.title)}
                    </h4>
                  )}

                  <div className="links-items">
                    {item.links.map((link, idx) =>
                      link.type === "url" ? (
                        <a
                          href={link.path}
                          key={idx}
                          className="d-block link-item text-capitalize"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t(link.name)}
                        </a>
                      ) : (
                        <Link
                          href={link.path}
                          key={idx}
                          className="d-block link-item text-capitalize"
                        >
                          {t(link.name)}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </Col>
            ))}
            <Col md="6" lg="3">
              <h4 className="links-title text-capitalize">{t("our_apps")}</h4>
              <div className="apps-links d-flex align-items-center">
                <a href="http://test.com" className="app-link flex-fill">
                  <Image
                    width={145}
                    height={50}
                    src="/assets/imgs/apple-app-store.svg"
                    alt="apple app store"
                    className="img-fluid"
                    priority
                  />
                </a>
                <a href="http://test.com" className="app-link flex-fill">
                  <Image
                    width={145}
                    height={50}
                    src="/assets/imgs/google-play-store.svg"
                    alt="google play store"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="social-links">
                <a href="http://test.com" className="social-link">
                  <i className="lab la-facebook-f"></i>
                </a>
                <a href="http://test.com" className="social-link">
                  <i className="lab la-twitter"></i>
                </a>
                <a href="http://test.com" className="social-link">
                  <i className="lab la-linkedin-in"></i>
                </a>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="10" lg="8">
              <div className="about">
                <Image
                  width={114}
                  height={50}
                  src="/assets/imgs/logo.webp"
                  alt="logo"
                  className="img-fluid logo"
                />
                <h6 className="about-desc">{t("about")}</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
