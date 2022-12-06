import React from "react";

import { Btn, Title } from "components";

import { Col, Container, Row } from "react-bootstrap";

import { useTranslation } from "next-i18next";

export default function InfoSection() {
  const { t } = useTranslation(["foreignTrade"]);

  return (
    <section className="foreign-info-section position-relative pt pb">
      <img src="assets/imgs/lines.svg" alt="" className="img-fluid" />
      <Container>
        <Row className="justify-content-center">
          <Col md="10" lg="8">
            <Title
              title={t("trade_service")}
              subtitle={t("register_interested")}
              style={{
                lineHeight: "1.7",
                marginBottom: "var(--space-md)",
                color: "var(--bs-white)",
              }}
              subtitleStyle={{ color: "var(--bs-gray-100)" }}
            />
            <div className="d-flex justify-content-center">
              <Btn
                name={"interested_register_btn"}
                ns="foreignTrade"
                style={{
                  backgroundColor: "var(--dark)",
                  height: "50px",
                  minWidth: "200px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
