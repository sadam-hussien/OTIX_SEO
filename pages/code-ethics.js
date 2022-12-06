import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Container } from "react-bootstrap";

import { InnerTitle, Listing, ContainerInner } from "components";

import Head from "next/head";

export default function ConflictPolicy() {
  const { t } = useTranslation(["codeOfEthics"]);
  return (
    <StaticLayout title={t("code_of_ethics")}>
      <Head>
        <title>Code of Ethics</title>
      </Head>
      <section className="pt pb">
        <Container>
          <InnerTitle title={t("code_of_ethics")} />
          <article>
            <p className="terms-content">{t("p1")}</p>
            <p className="terms-content">{t("p2")}</p>

            <p className="terms-content">{t("p3")}</p>
            <ContainerInner>
              <InnerTitle title={t("individuality_is_valued")} sub />

              <p className="terms-content">{t("individuality_p1")}</p>
              <p className="terms-content">{t("individuality_p2")}</p>

              <p className="terms-content">{t("individuality_p3")}</p>
              <Listing
                translation={"codeOfEthics"}
                list={[
                  "individuality_l1",
                  "individuality_l2",
                  "individuality_l3",
                  "individuality_l4",
                  "individuality_l5",
                  "individuality_l6",
                  "individuality_l7",
                  "individuality_l8",
                ]}
              />
            </ContainerInner>
            <ContainerInner>
              <InnerTitle
                title={t("create_a_culture_of_open_and_honest_communication")}
                sub
              />

              <p className="terms-content">{t("create_a_culture_p1")}</p>
              <p className="terms-content">{t("create_a_culture_p2")}</p>

              <p className="terms-content">{t("create_a_culture_p3")}</p>

              <p className="terms-content">{t("create_a_culture_p4")}</p>

              <p className="terms-content">{t("create_a_culture_p5")}</p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("the_tone_should_be_set_at_the_top")} sub />

              <p className="terms-content">{t("the_tone_should_p1")}</p>
              <p className="terms-content">{t("the_tone_should_p2")}</p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("competition")} sub />

              <p className="terms-content">{t("competition_p1")}</p>
              <p className="terms-content">{t("competition_p2")}</p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("gifts")} sub />

              <p className="terms-content">{t("gifts_p1")}</p>
              <p className="terms-content">{t("gifts_p2")}</p>
              <p className="terms-content">{t("gifts_p3")}</p>
              <p className="terms-content">{t("gifts_p4")}</p>
              <p className="terms-content">{t("gifts_p5")}</p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("avoiding_conflicts_of_interest")} sub />

              <p className="terms-content">{t("avoiding_conflicts_p1")}</p>
              <p className="terms-content">{t("avoiding_conflicts_p2")}</p>
              <p className="terms-content">{t("avoiding_conflicts_p3")}</p>
              <Listing
                translation={"codeOfEthics"}
                list={[
                  "avoiding_conflicts_l1",
                  "avoiding_conflicts_l2",
                  "avoiding_conflicts_l3",
                  "avoiding_conflicts_l4",
                  "avoiding_conflicts_l5",
                  "avoiding_conflicts_l6",
                  "avoiding_conflicts_l7",
                ]}
              />

              <p className="terms-content">{t("avoiding_conflicts_p4")}</p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("business_courtesies")} sub />

              <p className="terms-content">{t("business_courtesies_p1")}</p>
              <p className="terms-content">{t("business_courtesies_p2")}</p>
              <p className="terms-content">{t("business_courtesies_p3")}</p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("monitoring")} sub />

              <p className="terms-content">{t("monitoring_p1")}</p>
              <p className="terms-content">{t("monitoring_p2")}</p>
              <p className="terms-content">{t("monitoring_p3")}</p>
              <p className="terms-content">{t("monitoring_p4")}</p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("maintain_the_rule_of_law")} sub />

              <p className="terms-content">
                {t("maintain_the_rule_of_law_p1")}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("providing_business_courtesies")} sub />

              <p className="terms-content">
                {t("providing_business_courtesies_p1")}
              </p>
              <p className="terms-content">
                {t("providing_business_courtesies_p2")}
              </p>
              <p className="terms-content">
                {t("providing_business_courtesies_p3")}
              </p>
              <Listing
                translation={"codeOfEthics"}
                list={[
                  "providing_business_courtesies_l1",
                  "providing_business_courtesies_l2",
                  "providing_business_courtesies_l3",
                ]}
              />
            </ContainerInner>
            <ContainerInner>
              <InnerTitle
                title={t("set_metrics_and_report_results_accurately")}
                sub
              />

              <p className="terms-content">
                {t("set_metrics_and_report_results_accurately_p1")}
              </p>
              <p className="terms-content">
                {t("set_metrics_and_report_results_accurately_p2")}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("promote_substance_over_form")} sub />

              <p className="terms-content">
                {t("promote_substance_over_form_p1")}
              </p>
              <p className="terms-content">
                {t("promote_substance_over_form_p2")}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("accountability")} sub />

              <p className="terms-content">{t("accountability_p1")}</p>
              <p className="terms-content">{t("accountability_p2")}</p>
              <p className="terms-content">{t("accountability_p3")}</p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("be_loyal")} sub />

              <p className="terms-content">{t("be_loyal_p1")}</p>
              <p className="terms-content">{t("be_loyal_p2")}</p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("keeping_corporate_records")} sub />

              <p className="terms-content">
                {t("keeping_corporate_records_p1")}
              </p>
              <p className="terms-content">
                {t("keeping_corporate_records_p2")}
              </p>
              <p className="terms-content">
                {t("keeping_corporate_records_p3")}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("accepting_business_courtesies")} sub />

              <p className="terms-content">
                {t("accepting_business_courtesies_p1")}
              </p>
              <p className="terms-content">
                {t("accepting_business_courtesies_p2")}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("utilization_of_company_resources")} sub />

              <p className="terms-content">
                {t("utilization_of_company_resources_p1")}
              </p>
              <p className="terms-content">
                {t("utilization_of_company_resources_p2")}
              </p>
              <p className="terms-content">
                {t("utilization_of_company_resources_p3")}
              </p>
              <p className="terms-content">
                {t("utilization_of_company_resources_p4")}
              </p>
              <p className="terms-content">
                {t("utilization_of_company_resources_p5")}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("inquiries_from_the_media")} sub />

              <p className="terms-content">
                {t("inquiries_from_the_media_p1")}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("make_the_right_decision")} sub />

              <p className="terms-content">{t("make_the_right_decision_p1")}</p>

              <Listing
                translation={"codeOfEthics"}
                list={[
                  "make_the_right_decision_l1",
                  "make_the_right_decision_l2",
                  "make_the_right_decision_l3",
                  "make_the_right_decision_l4",
                  "make_the_right_decision_l5",
                  "make_the_right_decision_l6",
                  "make_the_right_decision_l7",
                ]}
              />
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("review_of_code_of_ethics_policy")} sub />

              <p className="terms-content">
                {t("review_of_code_of_ethics_policy_p1")}
              </p>

              <Listing
                translation={"codeOfEthics"}
                list={[
                  "review_of_code_of_ethics_policy_l1",
                  "review_of_code_of_ethics_policy_l2",
                ]}
              />
            </ContainerInner>
          </article>
        </Container>
      </section>
    </StaticLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "codeOfEthics",
      "header",
      "footer",
      "global",
    ])),
  },
});
