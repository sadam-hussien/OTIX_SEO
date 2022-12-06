import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import { Col, Container, Row } from "react-bootstrap";

import StaticLayout from "layout/main/StaticLayout";

import { data_blog } from "data";

import Link from "next/link";

import Image from "next/image";

import Head from "next/head";

export default function Blog() {
  const { t } = useTranslation(["blog"]);
  return (
    <StaticLayout title={t("blog_title")} subtitle={t("blog_subtitle")}>
      <Head>
        <title>Blog</title>
      </Head>
      <Container>
        <section className="pt pb">
          <Row>
            {data_blog.map((item, index) => (
              <Col key={index}>
                <Link href={`${item.id}`} className="blog-item d-block h-100">
                  <div
                    className="position-relative"
                    style={{ height: "220px" }}
                  >
                    <Image
                      // width={}
                      // height={200}
                      src={"/" + item.image}
                      alt={item.title}
                      className="img-fluid"
                      fill
                      sizes="100%"
                    />
                  </div>
                  <div className="blog-item-body">
                    <h4 className="blog-item-title">{item.title}</h4>
                    <p className="blog-item-desc mb-0">
                      {item.desc.substring(0, 100)}
                    </p>
                  </div>
                </Link>
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
      "blog",
      "header",
      "footer",
      "global",
    ])),
  },
});
