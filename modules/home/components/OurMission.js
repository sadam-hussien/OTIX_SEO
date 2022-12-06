import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import { Title } from "components";

import { useTranslation } from "next-i18next";

export default function OurMission() {
  const { t } = useTranslation(["home"]);
  return (
    <section className="position-relative about-section pb pt">
      <Container>
        <Title title={t("our_mission_title")} />
        <Row className="justify-content-center align-items-center">
          <Col md="8">
            <p className="about-desc m-0 text-center">
              {t("our_mission_desc")}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
