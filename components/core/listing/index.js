import { useTranslation  } from "next-i18next";

export default function Listing({ list = [], translation, link }) {
  const { t } = useTranslation([translation]);
  return (
    <ul className="list-unstyled m-0 p-0 listing">
      {list.map((item, index) =>
        link ? (
          <li key={index} className="listing-item d-flex gap-3">
            <a href={item}>{t(item)}</a>
          </li>
        ) : (
          <li key={index} className="listing-item d-flex gap-3">
            {t(item)}
          </li>
        )
      )}
    </ul>
  );
}
