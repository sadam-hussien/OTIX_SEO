import { Btn } from "components";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useTranslation } from "next-i18next";
export default function PortfolioSection() {
  const { t } = useTranslation(["home"]);
  return (
    <section className="portfolio_section">
      <Container>
        <Row className="align-items-center">
          <div className="col-md-6 pb pt content">
            <img
              src="assets/imgs/logo-dark.webp"
              alt="logo"
              className="img-fluid"
            />
            <h2>
              {t("assistance")} <br /> {t("required")} {t("reach")}
            </h2>
          </div>
          <div className="col-md-6">
            <Form className="form">
              <Row>
                <Col>
                  <Form.Label>{t("first_name")}</Form.Label>
                  <Form.Control className="formControl " />
                </Col>
                <Col>
                  <Form.Label>{t("last_name")}</Form.Label>
                  <Form.Control className="formControl " />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>{t("email")}</Form.Label>
                  <Form.Control className="formControl " />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>{t("message")}</Form.Label>
                  <Form.Control
                    className="formControl "
                    as="textarea"
                    rows={3}
                  />
                </Col>
              </Row>
              <Row className="justify-content-end">
                <Btn
                  name={t("submit")}
                  style={{
                    maxWidth: 150,
                  }}
                />
              </Row>
            </Form>
          </div>
        </Row>
      </Container>
    </section>
  );
}
