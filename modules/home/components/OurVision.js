import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import { Title } from "components";

import { useTranslation } from "next-i18next";

export default function OurVision({ noBg }) {
  const { t } = useTranslation(["home"]);
  return (
    <section
      className={`position-relative ${noBg ? "about-section" : ""} pt pb`}
    >
      <Container>
        <Title title={t("our_vision_title")} />
        <Row className="justify-content-center align-items-center">
          <Col md="8">
            <p className="about-desc m-0 text-center">{t("our_vision_desc")}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
