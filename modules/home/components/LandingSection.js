import React from "react";

import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import { useTranslation } from "next-i18next";

export default function LandingSection() {
  const { t } = useTranslation(["home"]);
  return (
    <section className="landing-section">
      <div className="landing-content pt pb">
        <Container className="position-relative">
          <Row className="justify-content-between">
            <Col lg="6">
              <div className="landing-inner">
                <h1 className="landing-title">{t("landing_main_title")}</h1>
                <h3 className="landing-sub-title">{t("landing_sub_title")}</h3>
                <div className="landing-join">
                  <Form>
                    <h6 className="landing-join-title">{t("landing_join")}</h6>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder={t("landing_join_holder")}
                        aria-label="email"
                        aria-describedby="landing-join"
                        type="email"
                        className="landing-inp"
                      />
                      <Button className="landing-btn">
                        {t("landing_start_now")}
                      </Button>
                    </InputGroup>
                  </Form>
                  <div className="landing-apps d-flex align-items-center">
                    <a href="http://test.com" className="app-link">
                      <img
                        src="assets/imgs/apple-app-store.svg"
                        alt="apple app store"
                        className="img-fluid"
                      />
                    </a>
                    <a href="http://test.com" className="app-link">
                      <img
                        src="assets/imgs/google-play-store.svg"
                        alt="google play store"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="5" className="d-none d-lg-block">
              <div className="landing-imgs position-relative h-100 w-100">
                <div className="landing-img">
                  <img
                    src="assets/imgs/home/tablet.webp"
                    alt="tablet"
                    className="img-fluid"
                  />
                </div>
                <div className="landing-img landing-img-phone">
                  <img
                    src="assets/imgs/home/phone.webp"
                    alt="mobile"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* wavy  */}
      <div className="custom-shape-divider-top-1665473795">
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
    </section>
  );
}
