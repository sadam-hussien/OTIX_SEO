import { Container, Row } from "react-bootstrap";

export default function PartnersSection() {
  const data = [
    { img: "https://bitoasis.net/en/assets/images/press/forbes-logo.svg" },
    { img: "https://bitoasis.net/en/assets/images/press/coindesk-logo.svg" },
    { img: "https://bitoasis.net/en/assets/images/press/gulf-news-logo.svg" },
    { img: "https://bitoasis.net/en/assets/images/press/tech-crunch-logo.svg" },
    // {
    //   img: "https://bitoasis.net/en/assets/images/press/arabian-business-logo.svg",
    // },
    // { img: "https://bitoasis.net/en/assets/images/press/bloomberg-logo.svg" },
    {
      img: "https://bitoasis.net/en/assets/images/press/cointelegraph-logo.svg",
    },
  ];
  return (
    <section>
      <Container>
        <Row className="partner_section d-flex flex-row pb pt justify-content-center gx-5">
          {data.map((item, index) => (
            <img className="partnerImg" key={index} src={item.img} alt="" />
          ))}
        </Row>
      </Container>
    </section>
  );
}
