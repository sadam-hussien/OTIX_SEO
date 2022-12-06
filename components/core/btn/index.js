import Button from "react-bootstrap/Button";

import { useTranslation } from "next-i18next";

export default function Btn({
  classes,
  name,
  style = {},
  ns = "home",
  onClick,
}) {
  const { t } = useTranslation([ns]);
  return (
    <Button style={style} className={`${classes} main-btn`} onClick={onClick}>
      {t(name)}
    </Button>
  );
}
