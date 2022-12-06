import React from "react";

import { FeatureCard, Title } from "components";

import { useTranslation } from "next-i18next";

import { Col, Container, Row } from "react-bootstrap";

export default function Deals() {
  const { t } = useTranslation("foreignTrade");
  return (
    <section className="get-started-section pt pb">
      <Title title={t("deals_title")} subtitle={t("deals_subtitle")} />
      <div>
        <Container>
          <Row className="row gy-4 get-started-cards row-cards">
            <Col lg="4">
              <FeatureCard
                title={t("big_deal")}
                desc={t("big_deal_desc")}
                icon={<i className="las la-hand-holding-usd"></i>}
              />
            </Col>
            <Col lg="4">
              <FeatureCard
                title={t("competitive_prices")}
                desc={t("competitive_prices_desc")}
                icon={<i className="las la-people-carry"></i>}
              />
            </Col>
            <Col lg="4">
              <FeatureCard
                title={t("custom_support")}
                desc={t("custom_support_desc")}
                icon={<i className="las la-headset"></i>}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
