import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import { Col, Container, Row, Form } from "react-bootstrap";

import { Btn } from "components";

import Head from "next/head";

export default function Contact() {
  const { t } = useTranslation(["home"]);
  return (
    <section className="pt pb contact-page">
      <Head>
        <title>Support</title>
      </Head>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "home",
      "header",
      "footer",
      "global",
    ])),
  },
});
