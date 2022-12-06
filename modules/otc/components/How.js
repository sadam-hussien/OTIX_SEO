import React from "react";

import { FeatureCard, Title } from "components";

import { Col, Container, Row } from "react-bootstrap";

import { useTranslation } from "next-i18next";

const data = [
  {
    id: "01",
    title: "how_contact_us",
    desc: "how_contact_us_desc",
  },
  {
    id: "02",
    title: "how_verification",
    desc: "how_verification_desc",
  },
  {
    id: "03",
    title: "how_trade",
    desc: "how_trade_desc",
  },
];

export default function How() {
  const { t } = useTranslation("foreignTrade");
  return (
    <section className="foreign-how-section pt pb">
      <Container>
        <Row className="align-items-center">
          <Col lg="4" className="pt pb">
            <div className="how-title">
              <Title
                title={t("how_title")}
                subtitle={t("how_subtitle")}
                style={{ textAlign: "start", fontSize: "3rem" }}
                subtitleStyle={{ textAlign: "start", lineHeight: "1.7" }}
                classes="no-decoration"
              />
            </div>
          </Col>

          <Col
            className="pt pb"
            lg="8"
            style={{
              backgroundImage: "url(assets/imgs/lines.svg)",
              backgroundSize: "cover",
            }}
          >
            <Row className="row-cards">
              {data.map((item, index) => (
                <Col lg="4" key={index}>
                  <FeatureCard
                    title={t(item.title)}
                    desc={t(item.desc)}
                    icon={item.id}
                    style={{ "--i": index * 40 + "px" }}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
