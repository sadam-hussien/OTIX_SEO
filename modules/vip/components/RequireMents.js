import React from "react";

import { FeatureCard, Title } from "components";

import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "next-i18next";

export default function RequireMents() {
  const { t } = useTranslation("foreignTrade");
  return (
    <section className="foreign-requirements pt pb">
      <Container>
        <Title
          title={t("requirements_title")}
          subtitle={t("requirements_subtitle")}
        />

        <Row className="row-cards gy-5">
          <Col xs={12}>
            <FeatureCard
              icon="01"
              title={t("requirement_one")}
              classes="flex-row"
            />
          </Col>
          <Col xs={12}>
            <FeatureCard
              icon="02"
              title={t("requirement_two")}
              classes="flex-row"
            />
          </Col>
          <Col xs={12}>
            <FeatureCard
              icon="03"
              title={t("requirement_three")}
              classes="flex-row"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
