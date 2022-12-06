import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Container } from "react-bootstrap";

import { InnerTitle, Listing, ContainerInner } from "components";

import Head from "next/head";

export default function ConflictPolicy() {
  const { t } = useTranslation(["conflictPolicy"]);
  return (
    <StaticLayout title={t("conflict_policy")}>
      <Head>
        <title>Conflict Policy</title>
      </Head>
      <section className="pt pb">
        <Container>
          <InnerTitle title={t("introduction")} sub />
          <article>
            <p className="terms-content">
              {t("by_accessing_our_website_or_using_our_services")}
            </p>
            <p className="terms-content">
              {t("service_virtual_currency_exchange_operator")}
            </p>

            <InnerTitle title={t("definition")} sub />
            <p className="terms-content">
              {t(
                "definition_of_conflict_of_interest_members_of_the_oversight_committee"
              )}
            </p>
            <InnerTitle
              title={t("system_for_managing_conflicts_of_interest")}
              sub
            />
            <p className="terms-content">
              {t(
                "to_guarantee_that_adequate_conflict_of_interest_management_is_carried_out"
              )}
            </p>
            <p className="terms-content">
              {t("the_company_keeps_an_internal_log_of_disputes_that_emerge")}
            </p>
            <p className="terms-content">
              {t("where_our_functions_may_cause_internal_conflict")}
            </p>
            <p className="terms-content">
              {t(
                "personal_account_dealing_regulations_are_enforced_for_all_employees"
              )}
            </p>
            <p className="terms-content">
              {t(
                "the_company_does_not_prohibit_our_employees_from_accepting_small_gifts"
              )}
            </p>
            <p className="terms-content">
              {t("by_publishing_this_policy_and_requesting_a_user")}
            </p>
            <InnerTitle title={t("penalties_and_consequences")} sub />

            <p className="terms-content">
              {t(
                "potential_violations_of_this_policy_will_be_subject_to_investigation_by_the_administrator"
              )}
            </p>
            <InnerTitle title={t("annual_acknowledgement")} sub />

            <p className="terms-content">{t("on_an_annual_basis")}</p>
          </article>
        </Container>
      </section>
    </StaticLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", [
      "conflictPolicy",
      "header",
      "footer",
      "global",
    ])),
  },
});
