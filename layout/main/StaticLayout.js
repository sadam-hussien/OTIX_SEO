import { Title } from "components";

import { Col, Container, Row } from "react-bootstrap";

import Link from "next/link";

export default function StaticLayout({ children, title, subtitle, btn }) {
  return (
    <>
      <div className="sub-layout position-relative pt pb">
        <img src="/assets/imgs/lines.svg" alt="" className="img-fluid" />
        <Container>
          <Row className="justify-content-center">
            <Col md="10" lg="8">
              <Title
                title={title}
                subtitle={subtitle}
                style={{
                  lineHeight: "1.7",
                  marginBottom: "var(--space-md)",
                  color: "var(--bs-white)",
                }}
                subtitleStyle={{ color: "var(--bs-gray-100)" }}
              />
              <div className="d-flex justify-content-center">
                {btn && (
                  <Link
                    href={btn.path}
                    className="layout-btn d-flex align-items-center justify-content-center rounded-pill text-capitalize"
                  >
                    {btn.title}
                  </Link>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {children}
    </>
  );
}
