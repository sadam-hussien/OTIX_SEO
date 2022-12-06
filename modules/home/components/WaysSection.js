import React from "react";

import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

import { useTranslation } from "next-i18next";

import { Title } from "components";

const tabs = [
  {
    id: "01",
    eventKey: "first",
    name: "ways_one",
  },
  {
    id: "02",
    eventKey: "second",
    name: "ways_two",
  },
  {
    id: "03",
    eventKey: "third",
    name: "ways_three",
  },
  {
    id: "04",
    eventKey: "four",
    name: "ways_four",
  },
];

const tabsContent = [
  {
    eventKey: "first",
    img: "assets/imgs/home/way01.png",
    content: "way_one_content",
  },
  {
    eventKey: "second",
    img: "assets/imgs/home/way02.png",
    content: "way_two_content",
  },
  {
    eventKey: "third",
    img: "assets/imgs/home/way03.png",
    content: "way_three_content",
  },
  {
    eventKey: "four",
    img: "assets/imgs/home/way04.png",
    content: "way_four_content",
  },
];

export default function WaysSection() {
  const { t } = useTranslation(["home"]);
  return (
    <section className="ways-section position-relative pt pb">
      <Container>
        <Title title={t("ways_title")} subtitle={t("ways_subtitle")} />
        <Tab.Container id="ways-tabs" defaultActiveKey="first">
          <Row>
            <Col sm={6}>
              <div className="ways-tabs">
                {tabs.map((item) => (
                  <Nav key={item.id} variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link
                        eventKey={item.eventKey}
                        className="way-tab-item"
                      >
                        <span>{item.id}</span>
                        {t(item.name)}
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                ))}
              </div>
            </Col>
            <Col sm="6">
              <div className="ways-content">
                <Tab.Content>
                  {tabsContent.map((item, index) => (
                    <Tab.Pane eventKey={item.eventKey} key={index}>
                      <div className="way-content-inner d-flex align-items-center">
                        <img
                          src={item.img}
                          alt={item.content}
                          className="img-fluid"
                        />
                        <p className="way-desc m-0">{t(item.content)}</p>
                      </div>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  );
}
