import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import { Accordion, Container } from "react-bootstrap";

import StaticLayout from "layout/main/StaticLayout";

import { data_faq } from "data";

import Head from "next/head";

export default function Faq() {
  const {
    t,
    i18n: { language },
  } = useTranslation(["blog"]);
  return (
    <StaticLayout title={t("faq_title")} subtitle={t("faq_subtitle")}>
      <Head>
        <title>FAQ</title>
      </Head>
      <Container>
        <section className="pt pb">
          <Accordion defaultActiveKey="1">
            {data_faq.map((item, index) => (
              <Accordion.Item eventKey={item.id} key={index}>
                <Accordion.Header>
                  {language === "ar" ? item.question_ar : item.question}
                </Accordion.Header>
                <Accordion.Body>
                  {language === "ar" ? item.answer_ar : item.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </section>
      </Container>
    </StaticLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "blog",
      "about",
      "header",
      "footer",
      "global",
    ])),
  },
});
