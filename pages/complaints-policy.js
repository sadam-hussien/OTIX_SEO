import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Container } from "react-bootstrap";

import { InnerTitle, Listing, ContainerInner } from "components";

import Head from "next/head";

export default function ComplaintsPolicy() {
  const { t } = useTranslation(["complaintsPolicy"]);
  return (
    <StaticLayout title={t("complaints_policy")}>
      <Head>
        <title>Complaints Policy</title>
      </Head>
      <section className="pt pb">
        <Container>
          <InnerTitle title={t("complaints_policy")} sub />
          <article>
            <p className="terms-content">
              {t("by_accessing_our_website_or_using_our_services")}
            </p>
            <ContainerInner>
              <InnerTitle title={t("introduction")} sub />
              <p className="terms-content">
                {t(
                  "usage_of_this_complaints_policy_must_be_in_conjunction_with_our_compliance_regulations"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "the_company_provides_a_full_service_virtual_currency_exchange_operator_and_deposit"
                )}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle
                title={t("the_intensity_of_the_complaints_handling_process")}
                sub
              />
              <p className="terms-content">
                {t(
                  "the_complaints_handling_protocol_outlines_the_methods_used_to_address_complaints"
                )}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("the_definition_of_a_complaint")} sub />
              <Listing
                translation={"complaintsPolicy"}
                list={[
                  "complaint_is_a_clients_way_of_expressing_their_displeasure_with_the_company's_provision",
                  "a_complaint_must_contain_the_following_information",
                  "an_insulting_reference_to_the_company_or_our_employee",
                ]}
              />
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("procedure")} sub />
              <p className="terms-content">
                {t(
                  "if_you_have_a_complaint_with_us_you_agree_to_contact_our_support_team"
                )}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("complaint_resolution_process")} sub />
              <Listing
                translation={"complaintsPolicy"}
                list={[
                  "any_complaints_shall_be_thoroughly_investigated_by_the_customer_support_department_and_the_compliance_department_as_necessary",
                  "the_customer_support_department_and_the_compliance_department_are_both_required_to",
                ]}
              />
              <div className="sub-list">
                <Listing
                  translation={"complaintsPolicy"}
                  list={[
                    "provide_the_client_an_initial_answer_within_forty_eight",
                    "address_complaints_as_soon_as_it_is_practical",
                    "notify_a_user_of_the_outcome",
                  ]}
                />
              </div>
              <Listing
                translation={"complaintsPolicy"}
                list={["all_complaints_will_get_confidential_treatment"]}
              />
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("faqs")} sub />
              <p className="terms-content">
                {t(
                  "contact_the_customer_service_department_with_any_inquiries_you_may_have_about_this_procedure"
                )}
              </p>
            </ContainerInner>
            <ContainerInner>
              <InnerTitle title={t("contacts")} sub />
              <Listing
                translation={"complaintsPolicy"}
                list={[
                  "customer_support_department_email",
                  "compliance_department_email",
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
      "complaintsPolicy",
      "header",
      "footer",
      "global",
    ])),
  },
});
