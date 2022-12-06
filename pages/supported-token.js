import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useState } from "react";

import { useTranslation } from "next-i18next";

import { Col, Container, Row } from "react-bootstrap";

import StaticLayout from "layout/main/StaticLayout";

import { Search } from "modules/supportedTokens/components";

import { data_currencies } from "data";

import Head from "next/head";

export default function SupportedTokens() {
  const { t } = useTranslation(["tokens"]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(data_currencies);
  const onChange = (value) => {
    setSearch(value);
    const filter_data = data_currencies.filter((item) =>
      item.name.includes(value)
    );
    setData(filter_data);
  };
  return (
    <StaticLayout title={t("tokens_title")} subtitle={t("tokens_subtitle")}>
      <Head>
        <title>Supported Token</title>
      </Head>
      <Container>
        <section className="pt pb">
          <Search value={search} onChange={(v) => onChange(v)} />
          <Row md="4" lg="5" className="g-5">
            {data.map((item, index) => (
              <Col key={index}>
                <div className="token-item d-flex align-items-center gap-4">
                  <img src={item.imageUrl} alt="icon" className="img-fluid" />
                  <div>
                    <h6 className="token-title m-0">{item.code}</h6>
                    <span className="token-subtitle">{item.name}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </StaticLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "tokens",
      "header",
      "footer",
      "global",
    ])),
  },
});
