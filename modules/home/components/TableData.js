import Link from "next/link";

import { Btn } from "components";

import { useTranslation } from "next-i18next";

const data = [
  {
    img: "assets/imgs/home/coin1.svg",
    title: "coin_1",
    path: "/",
  },
  {
    img: "assets/imgs/home/coin2.svg",
    title: "coin_2",
    path: "/",
  },
  {
    img: "assets/imgs/home/coin3.svg",
    title: "coin_3",
    path: "/",
  },
  {
    img: "assets/imgs/home/coin2.svg",
    title: "coin_4",
    path: "/",
  },
];

export default function TableData() {
  const { t } = useTranslation(["home"]);

  return data.map((item, index) => (
    <div
      key={index}
      className="justify-content-between d-flex align-items-center table-data-item"
    >
      <Link href={item.path} className="main-info d-flex align-items-center">
        <img src={item.img} alt="" className="img-fluid" />
        <p className="main-info-title m-0">{t(item.title)}</p>
      </Link>
      <img
        src="assets/imgs/home/graph.svg"
        className="img-fluid graph"
        alt=""
      />
      <div className="d-flex align-items-center btns">
        <Btn
          name="Details"
          style={{
            backgroundColor: "transparent",
            borderColor: "var(--dark)",
            color: "var(--dark)",
          }}
        />
        <Btn name="Buy" />
      </div>
    </div>
  ));
}
