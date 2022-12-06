import { Col, Container, Row } from "react-bootstrap";

import { useTranslation } from "next-i18next";

import { Btn, FeatureCard, Title } from "components";

export default function GetStarted() {
  const { t } = useTranslation(["home"]);
  return (
    <section className="get-started-section pt pb">
      <Title
        title={t("get_started_title")}
        subtitle={t("get_started_subtitle")}
      />
      <div>
        <Container>
          <Row className="row gy-4 get-started-cards row-cards">
            <Col lg="3">
              <FeatureCard
                title={t("get_started_register")}
                desc={t("get_started_register_desc")}
                icon={<i className="las la-user-check"></i>}
              />
            </Col>
            <Col lg="3">
              <FeatureCard
                title={t("get_started_verfiy")}
                desc={t("get_started_verify_desc")}
                icon={<i className="las la-user-plus"></i>}
              />
            </Col>
            <Col lg="3">
              <FeatureCard
                title={t("get_started_deposit")}
                desc={t("get_started_deposit_desc")}
                icon={<i className="las la-credit-card"></i>}
              />
            </Col>
            <Col lg="3">
              <FeatureCard
                title={t("get_started_buy")}
                desc={t("get_started_buy_desc")}
                icon={<i className="las la-coins"></i>}
              />
            </Col>
          </Row>
          <div className="get-started-btn d-flex justify-content-center">
            <Btn name="get_started_btn" style={{ minWidth: "200px" }} />
          </div>
        </Container>
      </div>
    </section>
  );
}
