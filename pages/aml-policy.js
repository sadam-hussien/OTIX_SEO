import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

import StaticLayout from "layout/main/StaticLayout";

import { Container, Table } from "react-bootstrap";

import { InnerTitle, Listing, ContainerInner } from "components";

import Head from "next/head";

export default function Aml() {
  const { t } = useTranslation(["aml"]);
  return (
    <StaticLayout title={t("aml_title")}>
      <Head>
        <title>AML Policy</title>
      </Head>
      <section className="pt pb">
        <Container>
          <section className="text-center">
            <InnerTitle title={t("money_laundering_prevention_manual")} />
            <InnerTitle title={t("master_sheet__Version_control")} sub />
            <Table bordered className="mt-5 mb-5">
              <thead>
                <tr>
                  <th>{t("date")}</th>
                  <th>{t("details")}</th>
                  <th>{t("amended")}</th>
                  <th>{t("distributed")}</th>
                  <th>{t("distribution")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2022</td>
                  <td>ALL</td>
                  <td>please add the name of the person</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </section>
          <InnerTitle title={t("aml_title")} />
          <article>
            <p className="terms-content">
              {t(
                "Otix Exchange UAB provides services of a virtual currency exchange operator and deposits virtual currency exchange operator platform that complies with anti-money laundering and Countering Financing of Terrorism (AML/CFT) laws and regulations.  you agree and understand that using our services through otix.exchange is referred to as (“otix.exchange”, “the Company”, “Company”, 'We,' 'Our,' or 'Us,'). Otix.exchange Website ('Website') (hence referred to as 'platform') (where 'user' and 'you' refer to a second party). By accessing our website or using our Services, you signify acceptance of this policy."
              )}
            </p>
            <ContainerInner>
              <InnerTitle title={t("purpose")} sub />
              <p className="terms-content">{t("purpose_p1")}</p>
              <p className="terms-content">{t("purpose_p2")}</p>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("definitions")} sub />
              <p className="terms-content">{t("definitions_p1")}</p>
              <p className="terms-content m-0">{t("definitions_p2")}</p>
              <Listing
                translation="aml"
                list={[
                  "definitions_l1",
                  "definitions_l2",
                  "definitions_l3",
                  "definitions_l4",
                ]}
              />

              <p className="terms-content">{t("definitions_p3")}</p>
              <p className="terms-content">{t("definitions_p4")}</p>
              <p className="terms-content m-0">{t("definitions_p5")}</p>
              <Listing
                translation="aml"
                list={[
                  "definitions_l5",
                  "definitions_l6",
                  "definitions_l7",
                  "definitions_l8",
                ]}
              />
              <p className="terms-content">{t("definitions_p6")}</p>
              <Listing
                translation="aml"
                list={[
                  "definitions_l9",
                  "definitions_l10",
                  "definitions_l11",
                  "definitions_l12",
                  "definitions_l13",
                  "definitions_l14",
                  "definitions_l15",
                  "definitions_l16",
                  "definitions_l17",
                  "definitions_l18",
                ]}
              />
              <p className="terms-content">{t("definitions_p7")}</p>
              <p className="terms-content">{t("definitions_p8")}</p>
              <p className="terms-content">{t("definitions_p9")}</p>
              <Listing translation="aml" list={["definitions_l19"]} />
              <section className="sub-list">
                <Listing
                  translation="aml"
                  list={[
                    "abbreviations_1",
                    "abbreviations_2",
                    "abbreviations_3",
                    "abbreviations_4",
                    "abbreviations_5",
                    "abbreviations_6",
                    "abbreviations_7",
                    "abbreviations_8",
                    "abbreviations_9",
                    "abbreviations_10",
                    "abbreviations_11",
                  ]}
                />
              </section>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("anti_money")} sub />
              <p className="terms-content">{t("anti_money_p1")}</p>
              <p className="terms-content m-0">{t("anti_money_p2")}</p>
              <Listing translation="aml" list={["anti_money_l1"]} />
              <section className="sub-list">
                <p className="terms-content">{t("anti_money_p3")}</p>
                <p className="terms-content">{t("anti_money_p4")}</p>

                <Listing translation="aml" list={["anti_money_l2"]} />
                <p className="terms-content">{t("anti_money_p5")}</p>
                <Listing
                  translation="aml"
                  list={["anti_money_l3", "anti_money_l4", "anti_money_l5"]}
                />
                <p className="terms-content">{t("anti_money_p6")}</p>
                <p className="terms-content m-0">{t("anti_money_p7")}</p>
                <p className="terms-content">{t("anti_money_p8")}</p>
                <p className="terms-content m-0">{t("anti_money_p8")}</p>
                <p className="terms-content">{t("anti_money_p9")}</p>
                <p className="terms-content m-0">{t("anti_money_p10")}</p>
                <p className="terms-content">{t("anti_money_p11")}</p>
                <p className="terms-content">{t("anti_money_p12")}</p>
              </section>
              <Listing translation="aml" list={["compliance_l1"]} />
              <section className="sub-list">
                <p className="terms-content">{t("compliance_p1")}</p>
                <p className="terms-content">{t("compliance_p2")}</p>

                <Listing
                  translation="aml"
                  list={[
                    "compliance_l2",
                    "compliance_l2",
                    "compliance_l3",
                    "compliance_l4",
                    "compliance_l5",
                    "compliance_l6",
                    "compliance_l7",
                    "compliance_l8",
                  ]}
                />
                <p className="terms-content">{t("compliance_p3")}</p>
                <Listing translation="aml" list={["senior_l1"]} />
                <p className="terms-content">{t("senior_p1")}</p>
                <Listing
                  translation="aml"
                  list={[
                    "senior_l2",
                    "senior_l3",
                    "senior_l4",
                    "senior_l5",
                    "senior_l6",
                    "senior_l7",
                    "senior_l8",
                    "senior_l9",
                  ]}
                />
              </section>
            </ContainerInner>

            <ContainerInner>
              <InnerTitle title={t("Customer Due Diligence")} sub />
              <p className="terms-content">
                {t(
                  "Customer due diligence (CDD) measures are required for verifying the identity of a new or existing Customer as a well-performing risk-based ongoing monitoring of the Business Relationship with the Customer. The CDD measures consist of 2 levels, including enhanced due diligence measures. Customers are categorized based on risk profile to low, medium, high and very high-risk customers"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "Customer's Identification and Verification",
                  "Identification",
                ]}
              />
              <p className="terms-content m-0">
                {t(
                  "The Company must only obtain the following data of the Customer who is a natural person"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "name(s) and surname(s); ",
                  "personal number/date of birth",
                  "citizenship ",
                  "country of residence • signature or in case of the Customer, which is a legal entity, the following data",
                  "business name",
                  "legal form",
                  "registration number, if such number has been issued",
                  "Beneficial owners (holds 25% +1 shares or more);",
                  "head office (address) and address of actual operation",
                  "the Customer´s representative name(s), surname(s) and personal number or date of birth; and ensure that the first payment be carried out through an account with a credit institution, where the credit institution is registered in EEA or in a Third Country which imposes requirements equivalent to those laid down in the relevant law and is supervised by competent authorities for compliance with those requirements",
                ]}
              />
              <p className="terms-content">
                {t(
                  "The following valid identity documents which contain data specified above may be used as the basis for the identification of a natural person"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "an identity document of the Republic of Lithuania",
                  "an identity document of a foreign state",
                  "a residence permit in the Republic of Lithuania",
                  "a driving license issued in a state of the European Economic Area in accordance with the requirements laid down in Annex I to Directive 2006/126/EC of the European Parliament and of the Council of 20 December 2006 on driving licenses (recast). ",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "The Customer, who is natural person, cannot use a representative in the course of business relationship or Occasional Transaction with us"
                )}
              </p>
              <p className="terms-content ">
                {t(
                  "The Company identifies the Customer which is a legal entity and their representative and retains the following data on the Customer"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "business name or name",
                  "legal form",
                  "registration number, if such number has been issued",
                  "name(s) and surname(s), personal number (in the case of an foreigner – date of birth or where available – personal number or any other unique sequence of symbols granted to that person, intended for personal identification) and citizenship of the director(s) or member(s) of the Management Board or member(s) of another equivalent body, and their authorities in representing the Customer",
                  "an extract of registration and its date of issuance",
                  "head office (address) and address of actual operation",
                ]}
              />
              <p className="terms-content ">
                {t(
                  "The following documents issued by a competent authority or body not earlier than six months before their use may be implied for identification of the Customer"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "registry card of the relevant register; or ",
                  "registration certificate of the relevant register; or ",
                  "a document equivalent with  documents or relevant documents of establishment of the Customer",
                ]}
              />
              <p className="terms-content ">
                {t(
                  "The Company  the correctness of the Customer's data specified above, using information originating from a credible and independent source for that purpose. Where we have access to the relevant register of legal entities, the submission of the documents specified above do not need to be demanded from the Customer"
                )}
              </p>
              <p className="terms-content ">
                {t(
                  "The identification of the Customer's representative and their right of representation"
                )}
              </p>
              <p className="terms-content ">
                {t(
                  "The representative of the Customer shall be identified as the Customer, who is a natural person in accordance with this Policy. The company must also identify and verify the nature and scope of the right of representation of the Customer. The name, date of issue and name of issuer of the document that serves as a basis for the right of representation must be ascertained and retained, except in case, when the right of representation was verified using information originating from the relevant register"
                )}
              </p>
              <p className="terms-content ">
                {t(
                  "we must observe the conditions of the right of representation granted to the legal entity's representatives and provide services only within the scope of the right of representation. The authorization has to be in line with the requirements of the Lithuanian Civil Code. The authorization issued abroad has to be legalized or bear an Apostille. In case the right of representation of the Customer (legal person) is evident from the registry extract, Articles of Association or equivalent documents evidencing the identity of the Customer (legal person), a separate document of authorization (e.g. a Power of Attorney) should not be required"
                )}
              </p>
              <p className="terms-content ">
                {t("The identification of the Customer's Beneficial Owner")}
              </p>
              <p className="terms-content ">
                {t(
                  "The company must identify the Beneficial Owner of the Customer and take measures to verify the identity of the Beneficial Owner to the extent that allows us to make sure that they know who the Beneficial Owner is. We collect the following data regarding the Customer's Beneficial Owner(s):"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "name(s) and surname(s);",
                  "personal number",
                  "citizenship",
                ]}
              />
              <p className="terms-content ">
                {t(
                  "The Company shall request from the Customer information to the Customer's Beneficial Owner (e. g. providing the Customer with an opportunity to specify their Beneficial Owner when collecting data about the Customer). "
                )}
              </p>
              <p className="terms-content ">
                {t(
                  "The Company   establish a Business Relationship, if the Customer, who is a natural person has Beneficial Owner who is not the same person as the Customer"
                )}
              </p>
              <p className="terms-content ">
                {t("Political Exposed Person's identification ")}
              </p>
              <p className="terms-content ">
                {t(
                  "The Company shall take measures to ascertain whether the Customer, the Beneficial Owner of the Customer or the representative of this Customer is a PEP, their family member19 or close associate20 or if the Customer has become such a person "
                )}
              </p>
              <p className="terms-content ">
                {t(
                  "The Company shall request from the Customer information to identify if the Customer is a PEP, their family member or close associate (e. g. providing the Customer with an opportunity to specify the relevant information when collecting data about the Customer). We shall verify the data received from the Customer by making inquiries in relevant databases or public databases or making inquiries or verifying data on the websites of the relevant supervisory authorities or institutions of the country in which the Customer has place of residence or seat. PEP must be additionally verified using international search engine (e. g. Google) and the local search engine of the Customer's country of origin, if any, by entering the Customer's name in both Latin and local alphabet with the Customer's date of birth"
                )}
              </p>
              <p className="terms-content ">
                {t(
                  "The Company shall identify close associates and family members of PEPs only if their connection with PEP is known to the public or if we have reason to believe that such a connection exists. Where the Customer who is a PEP no longer performs important public functions placed upon them, we shall at least within 12 months take into account the risks that remain related to the Customer and apply relevant and risk sensitivity-based measures as long as it is certain that the risks characteristic of PEPs no longer exist in the case of the Customer"
                )}
              </p>
              <p className="terms-content ">
                {t(
                  "Identification of the purpose and nature of the business relationship or a transaction"
                )}
              </p>
              <p className="terms-content ">
                {t(
                  "The company shall understand the purpose and nature of the establishing Business Relationship or performing transaction. Regarding the services provided, we  may request from the Customer the following information for understanding the purpose and nature of the Business Relationship or transaction"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "whether the Customer will use the services of the Firm for their own needs or will represent the interests of another person",
                  "contact information",
                  "information on the registered address and actual living address of the Customer",
                  "the estimated transactions turnover with the company per calendar year",
                  "the estimated source of funds used in the Business Relationship or transaction; ",
                  "if the Business Relationship or transaction is related to the Customer´s performance of economic or professional activities and which activities they are",
                  "information on the source of funds related to the Business Relationship or transaction, if amount of transactions (incl. expected amount) exceeds established limit",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "The Company shall apply additional measures and collect additional information to identify the purpose and nature of the Business Relationship or an Occasional Transaction in cases where: "
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "there is a situation that refers to high value or is unusual and/or ",
                  "where the risk and/or risk profile associated with the Customer and the nature of the Business Relationship gives reason for the performance of additional actions to be able to appropriately monitor to Business Relationship later",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "If the Customer is a legal entity, in addition to aforementioned the company shall identify the Customer´s area of activity, where We shall understand what the Customer deals with and intends to deal with in the course of the Business Relationship and how this corresponds to the purpose and nature of the Business Relationship in general and whether it is reasonable, understandable and plausible"
                )}
              </p>
              <Listing translation="aml" list={["Verification"]} />

              <p className="terms-content ">
                {t(
                  "Verification of the information for the Customer's identification means using data from a reliable and independent source to confirm that the data is true and correct, also confirming, if necessary, that the data directly related to the Customer is true and correct. This, inter alia, means that the purpose of verification of information is to obtain reassurance that the Customer, who wants to establish the Business Relationship is the person they claim to be"
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "The reliable and independent source (must exist cumulatively) is verification of the information obtained in the course of identification"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "which originates from two different sources",
                  "which has been issued by (identity documents) or received from a third party or a place that has no interest in or connections with the Customer or us, i.e. that is neutral (e.g. information obtained from the Internet is not such information, as it often originates from the Customer themselves or its reliability and independence cannot be verified",
                  "the reliability and independence of which can be determined without objective obstacles and reliability and independence are also understandable to a third party not involved in the Business Relationship; and ",
                  "the data included in which or obtained via which are up to date and relevant and the company can obtain reassurance about this (and reassurance can in certain cases also be obtained on the basis of the two previous clauses",
                ]}
              />
              <Listing translation="aml" list={["Main Principles of CDD"]} />

              <p className="terms-content ">
                {t(
                  "The CDD measures are taken and performed to the extent necessary considering the Customer’s risk profile and other circumstances in the following cases"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "upon establishment of the Business Relationship and during the ongoing monitoring of the Business Relationship",
                  "upon executing or mediating of Occasional Transaction(s) outside the Business Relationship, where the value of the transaction(s) amounts to 1.000 EUR or more (or an equal amount in another assets) within 24 hours",
                  "upon verification of information gathered while applying due diligence measures or in the case of doubts as to the sufficiency or truthfulness of the documents or data gathered earlier while updating the relevant data",
                  "upon suspicion of Money Laundering or Terrorist Financing, regardless of any derogations, exceptions or limits provided for in this Policy and applicable legislation",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "The company does not establish or maintain the Business Relationship and does not perform the transaction if: "
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "we are not able to take and perform any of required CDD measures",
                  "We have any suspicions that company’s services or transaction will be used for Money Laundering or Terrorist Financing",
                  "the risk level of the Customer or of the transaction does not comply with company's risk appetite",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "In the case of receiving information in foreign languages within the framework of CDD implementation, We may request to demand translation of the documents to another language appliable for us. The use of translations should be avoided in situations where the original documents are prepared in a language appliable for us. Achieving CDD is a process that starts with the implementation of CDD measures. When that process is complete, the Customer is assigned documented individual risk level which shall form the basis for follow-up measures, and which is followed up and updated when necessary"
                )}
              </p>

              <Listing translation="aml" list={["Main Principles of EDD"]} />

              <p className="terms-content ">
                {t("The Company always applies EDD measures, when")}
              </p>

              <Listing
                translation="aml"
                list={[
                  "the Customer's risk profile indicates high or very high-risk level of ML /TF",
                  "upon identification of the Customer or verification of submitted information, there are doubts as to the truthfulness of the submitted data, authenticity of the documents or identification of the Beneficial Owner",
                  "where cross-border correspondent relationships are commenced with the Customer, which is financial institution of Third Country",
                  "in the case of performance of transaction or Business Relationship with the PEP, the family member of the PEP or a person known to be the close associate of the PEP",
                  "where transaction or Business Relationship are carried out with natural persons residing or legal persons established in high-risk Third Countries as identified by the European Commission",
                  "the Customer is from such country or territory or their place of residence or seat or the seat of the payment service provider of the payee is in a country or territory that, according to credible source such as mutual evaluations, reports or published follow-up reports, has not established effective AML/CFT systems that are in accordance with the recommendations of the FATF",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "Prior to applying EDD measures, Company's employee ensures that the Business Relationship or transaction has a high or very high-risk and that a high-risk rate can be attributed to such Business Relationship or transaction. Above all, our employee assesses prior to applying the EDD measures whether the features described above are present and applies them as independent grounds (that is, each of the factors identified allows application of EDD measures with respect to the Customer). "
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "When applying EDD measures where cross-border correspondent relationship is commenced with the Customer, which is financial institution of Third Country, we must apply the following measures"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "gather sufficient information about the Customer to fully understand the nature of its business and to determine from publicly available information the reputation of the Customer and the quality of supervision",
                  "assess control mechanisms for AML of the Customer and the entity receiving funds; ",
                  "obtain approval from the Management Board member before establishing new correspondent relationships",
                  "document the respective responsibilities of the Customer; ",
                  "be satisfied that the Customer has carried out proper Customer due diligence (including verification of the identity of the Customers having direct access to accounts of the Customer and performance of other Customer due diligence actions) and that it is able to provide the relevant Customer identification data to the company upon its request",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "When applying EDD measures, where transactions or Business Relationships are carried out with the PEP, the family member of the PEP or a person known to be the close associate of the PEP, we must apply the following measures"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "obtain approval from the Management Board member before establishing Business Relationship with such take adequate measures to establish the source of wealth and source of funds that are involved in the Business Relationship or transaction",
                  "perform ongoing monitoring of the Business Relationship with the Customer by increasing the number and timing of controls applied, and selecting patterns of transactions that need further examination",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "When applying EDD measures where transaction or Business Relationship are carried out with natural persons residing or legal persons established in high-risk Third Countries as identified by the European Commission, we must apply the following measures: "
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "obtaining additional information on the Customer and on their Beneficial Owner",
                  "obtaining additional information on the intended nature of the Business Relationship",
                  "obtaining information on the source of funds and source of wealth of the Customer and their Beneficial Owner",
                  "obtaining information on the reasons for the intended or performed transactions",
                  "obtaining the approval of the Management Board member for establishing Business Relationships with the Customer or continuing Business Relationships with them",
                  "perform ongoing monitoring of the Business Relationship with the Customer by increasing the number and timing of controls applied, and selecting patterns of transactions that need further examination",
                  "ensuring that the first payment be carried out through an account in the Customer’s name with a credit institution, where the credit institution is registered in EEA or in a Third Country which imposes requirements equivalent to those laid down in the applicable law and is supervised by competent authorities for compliance with those requirements",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "In any other cases when EDD measures must be applied, the amount of EDD measures and the scope shall be determined by the employee, who is applying such measures. The following additional and relevant due diligence measures may be followed"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "verification of information additionally submitted upon identification of the Customer based on additional documents, data or information originating from a credible and independent source",
                  "gathering additional information on the purpose and nature of the Business Relationship or transaction and verifying the submitted information based on additional documents, data or information that originates from a reliable and independent source",
                  "gathering additional information and documents regarding the actual execution of transactions made in the Business Relationship",
                  "gathering additional information and documents for the purpose of identifying the source and origin of the funds used in a transaction made in the Business",
                  "the making of the first payment related to a transaction via an account that has been opened in the name of the Customer participating in the transaction in a credit institution registered or having its place of business in a contracting state of the European Economic Area or in a country where requirements equal to those of Directive (EU) 2015/849 of the European Parliament and of the Council are in force",
                  "the application of CDD measures regarding the Customer or their representative while being at the same place as the Customer or their representative",
                  "gathering additional information about the Customer and its Beneficial Owner, including identification of all owners of the Customer, incl. those whose shareholding is below 25%; ",
                  "gathering information on the origin of the funds and wealth of the Customer and its Beneficial Owner",
                  "improving the monitoring of the Business Relationship by increasing the number and frequency of the applied control measures and by choosing transaction indicators or transaction patterns that are additionally verified",
                  "obtaining the approval of the Management Board member for performing transactions or establishing business relationship with new and existing Customers",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "Our employee shall notify about EDD measures applied within 2 working days after the start of applying of the EDD measures by sending relevant notification to the MLRO"
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "In the case of application of EDD measures, the company reassesses the Customer’s risk profile no later than every six months"
                )}
              </p>

              <Listing
                translation="aml"
                list={["Implementation of Sanctions"]}
              />

              <p className="terms-content ">
                {t(
                  "The Company screens all customers against sanctions lists. Any type of transaction, involving  individuals or groups is prohibited as a blocked transaction. Customers that are flagged by our sanctions screening process will be unable to perform any transactions until it is determined they are not a sanctioned individual. If we identify a person who is a subject of Sanctions or that the transaction intended or carried out by them is in breach of Sanctions, we shall apply Sanctions and inform the FCIS thereof within 3 hours"
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "Procedure for identifying the subject of Sanctions and a transaction violating Sanctions we shall use at least the following sources (websites) to verify the Customer´s relation to Sanctions"
                )}
              </p>

              <Listing
                link
                translation="aml"
                list={[
                  "https://webgate.ec.europa.eu/fsd/fsf#!/files",
                  "https://www.un.org/securitycouncil/content/un-sc-consolidated-list",
                  "https://sanctionssearch.ofac.treas.gov",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "In addition to mentioned sources, we may use any other sources by the decision of our employee who is applying CDD measures"
                )}
              </p>

              <p className="terms-content ">
                The client's identifying information is checked on the EU
                Sanctions Online Map (
                <a href="https://www.sanctionsmap.eu/#/main">
                  https://www.sanctionsmap.eu/#/main
                </a>
                ). The Sanctions Card offers a centralized sanction accounting
                system that reflects the UN and EU sanctions regimes and is a
                convenient way for us to obtain the information it needs. The
                Sanctions Map indicates the types of sanctions, the legislation
                or the resolution that adopted the specific restrictive
                measures, provides an extensive search mechanism, as well as
                detailed explanations, such as which goods are prohibited from
                entering the country or territory, etc. The results of the
                research shall be documented in the research section of the
                client, indicating the results of the research and the date of
                the research
              </p>

              <p className="terms-content ">
                {t(
                  "The Company shall perform the above mentioned verification on an ongoing basis during an established Business Relationship. The frequency of the ongoing verifications depends on the Customer’s risk profile"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "once per week for the high-risk profile Customer",
                  "once per month for the medium-risk profile Customer",
                  "once per quarter for the low-risk profile Customer",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "If the employee has doubts that a person is a subject of Sanctions, our employee shall immediately notify the MLRO or the Management Board member. In this case the MLRO or the Management Board member shall decide whether to ask or acquire additional data from the person or notify the FCIS immediately of their suspicion"
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "Actions when identifying the Sanctions subject or a transaction violating Sanctions"
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "If the employee becomes aware that the Customer which is in Business Relationship or is performing a transaction with us, as well as a person intending to establish the Business Relationship or to perform a transaction with us, is the subject of Sanctions, our employee shall immediately notify the MLRO or the Management Board member, about the identification of the subject of Sanctions, of the doubt thereof and of the measures taken"
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "The MLRO or the Management Board member shall refuse to conclude a transaction or proceeding, shall take measures provided for in the act on the imposition or implementation of the Sanctions and shall notify immediately the FCIS of their doubts and of the measures taken. "
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "When identifying the subject of the Sanctions, it is necessary to identify the measures that are taken to Sanction this person. These measures are described in the legal act implementing the Sanctions, therefore it is necessary to identify the exact sanction what is implemented against the person to ensure legal and proper application of measures"
                )}
              </p>

              <Listing
                translation="aml"
                list={["Politically Exposed Persons"]}
              />

              <p className="terms-content ">
                {t(
                  "Individuals who have, or have had, a high political profile, or hold, or have held, public office, can pose a higher money laundering risk to us, as their position may make them vulnerable to corruption. This risk also extends to members of their immediate families and to know close associates. PEP status itself does not, of course, incriminate individuals or entities. It does, however, put the client, or the beneficial owner, into a higher risk category. When conducting client research, ascertain whether the client or its true beneficiary is not a politically significant person, at least in the following way"
                )}
              </p>

              <Listing
                link
                translation="aml"
                list={[
                  "https://rupep.org/en/",
                  "https://dilisense.com/en_US",
                  "https://www6.vid.gov.lv/PNP",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "When the company establishes a relationship with politically exposed persons, it shall"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "Identify using KYC process to identify whether a customer is a PEP individual",
                  "Have a formalized approval process for establishing such relationships; ensure that the internal procedures provide for enhanced due diligence measures",
                  "Implement routine PEP checks of existing customers that may fall into this category at a later date; • 	Maintain a PEP register for Clients who fall into this category; and ",
                  "Conduct enhanced ongoing monitoring of the relationship",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "Once a customer’s application has been approved by us, their information is rescreened on a weekly basis. This will ensure that we are able to take appropriate action as quickly as possible, should the classification of Customer’s status change"
                )}
              </p>

              <Listing translation="aml" list={["Monitoring"]} />

              <p className="terms-content ">
                {t(
                  "It is the Company's obligation to comply with applicable AML laws and regulations and to cooperate with law enforcement authorities in the investigation of money laundering or other criminal activity. Under this policy each employee has a responsibility to protect us from money laundering and other criminal activity by monitoring for unusual or potentially suspicious activity by customers, as well as we employees, and reporting such activity appropriately"
                )}
              </p>

              <Listing
                translation="aml"
                list={["Monitoring of Business Relationship"]}
              />

              <p className="terms-content ">
                {t(
                  "The Company shall monitor established Business Relationships where the following ongoing due diligence (ODD) measures are implemented"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "ensuring that the documents, data, or information collected in the course of the application of due diligence measures are updated regularly and in the case of trigger events, i.e., primarily the data concerning the Customer, their representative (incl. the right of representation) and Beneficial Owner as well as the purpose and nature of the Business Relationship",
                  "ongoing monitoring of the Business Relationship, which covers transactions carried out in the business relationship to ensure that the transactions correspond to the company’s knowledge of the Customer, their activities, and risk profile",
                  "identification of the source and origin of funds used in the transaction(s). ",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "the company shall regularly check and update the documents, data, and information collected within the course of the implementation of CDD measures and update the Customer's risk profile. The regularity of the checks and update must be based on the risk profile of the Customer and the checks must take place at least"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "once in 6 months for the high-risk and very high-risk profile Customer",
                  "once per year for the medium-risk profile Customer",
                  "once every two years for the low-risk profile Customer",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "The collected documents, data and information must also be checked if an event has occurred which indicates the need to update the collected documents, data and information"
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "TIn the course of the ongoing monitoring of the Business Relationship, we shall monitor the transactions concluded during the Business Relationship in such a manner that the latter can determine whether the transactions to be concluded correspond to the information previously known about the Customer (i.e., what the customer declared upon the establishment of the Business Relationship or what has become known in the course of the Business Relationship). "
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "The Company shall also monitor the Business Relationship to ascertain the Customer’s activities or facts that indicate criminal activities, Money Laundering or Terrorist Financing or the relation of which to Money Laundering or Terrorist Financing is probable, incl. complicated, high-value and unusual transactions and transaction patterns that do not have any reasonable or obvious economic or legitimate purpose or that are uncharacteristic of the specific features of the business in question. In the course of the Business Relationship, we shall constantly assess the changes in the Customer’s activities and assess whether these changes may increase the risk level associated with the Customer and the Business Relationship, giving rise to the need to apply EDD measures"
                )}
              </p>

              <Listing
                translation="aml"
                list={["Monitoring of transactions"]}
              />

              <p className="terms-content ">
                {t(
                  "Effective control of transactions for suspicious activity requires centrally monitoring transactions across systems and services and over longer periods of time to identify patterns that may indicate suspicious activity. The company will potentially employ automated systems and procedures to monitor fund movements and prepaid card transactions for activities and transaction patterns that may indicate that a transaction may be unusual and potentially suspicious"
                )}
              </p>
              <p className="terms-content ">
                {t("Our typical rule set to identify suspicious activity: ")}
              </p>

              <Listing
                translation="aml"
                list={[
                  "Load count(frequency)/volume per time period",
                  "Load activities at a quite times of a day (e.g. overnight); ",
                  "Transactions flagged with a negative balance during the top up",
                  "Load activity either side of midnight",
                  "Initial top up for a relatively small amount",
                  "Initial top up for a maximum limit range",
                  "Different accounts top up with the same device name ",
                  "Different account signed in from the same IP address ",

                  "Account top up performed in High Risk country ",
                  "Frequent exchanges to the same BTC wallet address ",
                  "Suspicious Transactions",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "A transaction requires reporting under this regulation if it is conducted or attempted by, at, or through a business partner where we know, suspect, or have reason to suspect that the transaction (or a pattern of transactions) of which the transaction"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "Involves funds derived from illegal activity or is intended or conducted in order to hide or disguise funds or assets derived from illegal activity (including, without limitation, the ownership, nature, source, location, or control of such funds or assets) as part of a plan to violate or evade any law or regulation or to avoid any transaction reporting requirement under any law or regulation",
                  "Is designed, whether through structuring or other means, to evade any existing legal reporting requirements",
                  "Serves no business or apparent lawful purpose; or ",
                  "We know of no reasonable explanation for the transaction after examining the available facts, including the background and possible purpose of the transaction",
                  "Employee Transaction Monitoring",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "the employees must be on their guard for any unusual or suspicious transactions, especially where they are not within the normal activity expected from the customer’s business. A suspicious transaction may not always be easy to recognize but will often be inconsistent with the Customer’s known activities or with the Customer’s normal business"
                )}
              </p>

              <p className="terms-content ">
                {t(
                  "When monitoring transactions, the employee shall assess transaction with a view to detect activities and transactions that"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "deviate from what there is reason to expect based on the CDD measures performed, the services provided, the information provided by the Customer and other circumstances (e.g. exceeding estimated transactions turnover, Virtual Currency sending each time to new Virtual Currency wallet, volume of transactions exceeding limit); ",
                  "without deviating according to previous clause, may be assumed to be part of a Money Laundering or Terrorist Financing",
                  "may affect the Customer's risk profile score. ",
                ]}
              />
              <p className="terms-content ">
                {t(
                  "In the case, where the aforementioned fact is detected, the employee shall notify MLRO and postpone any transaction of the Customer until MLRO´s decision regarding this"
                )}
              </p>
              <p className="terms-content ">
                {t(
                  "In addition to aforementioned, the MLRO shall review the Company´s transaction regularly (at least once per week) to ensure that"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "the Employees properly performed the aforementioned obligations",
                  "there are no transactions and transaction patterns that are complicated, high-value and unusual and that have no reasonable or obvious economic or legitimate purpose or are uncharacteristic of the specific features",
                ]}
              />

              <p className="terms-content ">
                {t(
                  "we identify the source and origin of the funds used in transaction(s) if necessary. The need to identify the source and origin of funds depends on the Customer’s previous activities as well as other known information. Thereby the identification of the source and origin of the funds used in transaction shall be performed in the following cases"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "the transactions exceed the limits established by us",
                  "the transactions do not correspond to the information previously known about the Customer",
                  "the company wants to or should reasonably consider it necessary to assess whether the transactions correspond to the information previously known about the Customer",
                  "the company suspects that the transactions indicate criminal activities, Money Laundering or Terrorist Financing or that the relation of transactions to Money Laundering or Terrorist Financing is probable, incl. complicated, high-value and unusual transactions and transaction patterns that do not have any reasonable or obvious economic or legitimate purpose or are uncharacteristic of the specific features of the business in question",
                ]}
              />
              <Listing translation="aml" list={["Reporting"]} />

              <p className="terms-content">
                {t(
                  "The Company must suspend the transaction disregarding the amount of the transaction (except for the cases where this is objectively impossible due to the nature of the Monetary Operation or transaction, the manner of execution thereof or other circumstances) and through its MLRO must report to the FCIS on the activity or the circumstances that they identify in the course of economic activities and whereby"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "we have established that the Customer is carrying out a suspicious transaction",
                  "we know or suspect that assets of any value are obtained directly or indirectly from criminal activity or participation in such activity",
                ]}
              />

              <p className="terms-content">
                {t(
                  "The reports specified above must be made before the completion of the transaction if the Company suspects or knows that Money Laundering or Terrorist Financing or related crimes are being committed and if said circumstances are identified before the completion of the transaction"
                )}
              </p>

              <p className="terms-content">
                {t(
                  "If the necessity of above mentioned report arises, the employee to whom such necessity became known must immediately notify the MLRO about this"
                )}
              </p>

              <p className="terms-content">
                {t(
                  "In any case (i.e. also in the situation where an activity or circumstance is identified after the completion of the transaction), the reporting obligation for the above reports must be performed immediately, but not later than three working hours after the identification of the activity or circumstance or the emergence of the actual suspicion (i.e. the situation where the suspicion cannot be dispelled). "
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "Reporting obligation regarding specific types of transactions",
                ]}
              />
              <p className="terms-content">
                {t(
                  "The company through its MLRO must send information to the FCIS not later than within 7 working days after the identification of Virtual Currency exchange transactions or transactions in Virtual Currency, if the daily value of such transaction(s) is equal to or exceeds EUR 15,000 or the equivalent amount in foreign or Virtual Currency, regardless of whether the transaction is concluded in one or more related monetary transactions"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "In case specified above information submitted to the FCIS shall include"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "the data confirming the Customer’s identity, and where the transaction is carried out through a representative – also the data confirming the identity of the representative",
                  "the amount of the transaction",
                  "the currency in which the transaction was executed",
                  "the date of execution of the transaction",
                  "the manner of execution of the Monetary Operation",
                  "the entity for whose benefit the Monetary Operation was executed (if it's possible); ",
                  "other data specified in the relevant FCIS instructions",
                ]}
              />
              <p className="terms-content">
                {t(
                  "we, a structural unit, a Management Board member, MLRO and the Employee is prohibited to inform a person, its Beneficial Owner, representative or third party about a report submitted on them to the FCIS, a plan to submit such a report or the occurrence of reporting as well as about a precept made by the FCIS or about the commencement of criminal proceedings"
                )}
              </p>
              <Listing translation="aml" list={["Trainings"]} />
              <p className="terms-content">
                {t(
                  "The company ensures that our employees, its contractors and others participating in the business on a similar basis and who perform work tasks that are of importance for preventing the use of the company's business for Money Laundering or Terrorist Financing (‘Relevant Persons’) have the relevant qualifications for these work tasks. When a Relevant Person is recruited or engaged, the Relevant Person’s qualifications are checked as part of the recruitment/appointment process by carrying out background checks, which is documented using a special standard form assessing employee suitability"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "In accordance with the requirements applicable to the company on ensuring the suitability of Relevant Persons, we make sure that such persons receive appropriate training and information on an ongoing basis to be able to fulfil the company's obligations in compliance with the applicable legislation. It is ensured through training that such persons are knowledgeable within the area of AML/CFT to an appropriate extent considering the person’s tasks and function. The training must provide, first and foremost, information on all the most contemporary money laundering and terrorist financing methods and risks arising therefrom"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "The content and frequency of the training is adapted to the person’s tasks and function on issues relating to AML/CFT measures. For new employees, the training comprises a review of the content of the applicable rules and regulations"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "The employees and the Management Board members receive training on an ongoing basis under the auspices of the MLRO in accordance with the following training plan"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "periodicity: at least once a year for the Management Board members. At least once a year for our employees and Relevant Person engaged",
                  "scope: review of applicable rules and regulations and other relevant procedures. Specific information relating to new/updated features in the applicable rules and regulations. Report and exchange of experience relating to transactions reviewed since the previous training",
                ]}
              />
              <p className="terms-content">
                {t(
                  "In addition to the above, Relevant Persons are kept informed on an ongoing basis about new trends, patterns and methods and are provided with other information relevant to the prevention of Money Laundering and Terrorist Financing"
                )}
              </p>
              <p className="terms-content">
                {t(
                  "The training held is to be documented electronically and confirmed with the Relevant Person signature. This documentation should include the content of the training, names of participants and date of the training"
                )}
              </p>
              <Listing translation="aml" list={["Record keeping"]} />
              <p className="terms-content">
                {t(
                  "Record keeping is an integral part of regulatory responsibility. To assist in record keeping the company maintains an employee training log including details of their assessment results, when they were examined, when they were trained, and any reassessment necessary"
                )}
              </p>
              <Listing translation="aml" list={["AML Records"]} />
              <p className="terms-content">
                {t(
                  "Where applicable, the following records are retained in a log by Compliance Officer for anti-money laundering purposes"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "Identification of clients - full details of evidence of identity for no less than five years from the end of the relationship ",
                  "Transactions – client files containing the full details of the transaction for no less than five years from the date the transaction was completed ",
                  "Internal and external reporting – full details of action taken by Compliance Officer for no less than five years from the creation of the record ",
                  "Information not acted upon – full details of the information considered by Compliance Officer, but not reported externally (i.e. to FIU) for no less than five years from the date the information was obtain ",
                  "Detailed records must be kept no less than five years from the date the transaction or customer relationship ended",
                  "Record Accessibility",
                ]}
              />

              <p className="terms-content">
                {t(
                  "The company maintains systems that ensure records are kept in accordance with regulatory requirements. we may keep records electronically in the operating systems or on specific storage facilities for onsite or offsite storage, or paper based. In any case we will ensure that"
                )}
              </p>
              <Listing
                translation="aml"
                list={[
                  "Records can be accessed in a reasonable time and at a minimum as required by regulation ",
                  "Records are protected against unauthorized access and accidental deletion or destruction, as per Data Protection requirements applicable in different jurisdictions ",
                  "Third party providers used for storage of records shall have systems and procedures in place to ensure that records are protected against unauthorized access accidental deletion and securely stored for the required amount of time ",
                  "Record Retention",
                ]}
              />

              <p className="terms-content">
                {t("The overall principles in this respect are the following")}
              </p>
              <Listing
                translation="aml"
                list={[
                  "Records verifying identity must be kept for no less than five after the termination of a Customer relationship/agreement ",
                  "Records supporting individual transactions must be kept for no less than five years following completion of the transaction ",
                  "Records of any report made to the compliance team (whether or not forwarded further) will be retained as part of the customer records ",
                  "Applicability",
                ]}
              />
              <p className="terms-content">
                {t(
                  "In accordance with the regulations, we record-keeping procedures shall enforce the retention, for the prescribed period, of the following records"
                )}
              </p>

              <Listing
                translation="aml"
                list={[
                  "In relation to any relationship that is formed, a record indicating the nature of the evidence of the customer due diligence documents obtained, comprising a copy of or the reference to the evidence required for the identity and providing sufficient information to enable the details as to a person’s identity contained in the relevant evidence to be re-obtained",
                  "A record containing details relating to the business relationship and to all transactions carried out by that person in the course of an established business relationship or occasional transaction which shall include the original documents or other copies which are admissible in court proceedings; and ",
                ]}
              />
              <p className="terms-content">
                {t(
                  "A record of the findings of our examination of the background and purpose of the relationships and related transactions"
                )}
              </p>
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
      "aml",
      "header",
      "footer",
      "global",
    ])),
  },
});
