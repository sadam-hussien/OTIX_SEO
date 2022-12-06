import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import { Title } from "components";

import { useTranslation } from "next-i18next";

export default function Content() {
  const { t } = useTranslation(["home"]);
  return (
    <section className="position-relative content-section pt pb">
      <Container>
        <Title title={t("about_us")} subtitle={t("about_subtitle")} />
        <Row className="justify-content-center align-items-center">
          <Col md="8">
            {/* <h3 className="about-title">{t("about_content_title")}</h3> */}
            <p className="about-desc m-0 text-center">
              {t("about_content_desc")}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
