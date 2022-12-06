export default function Title({
  title,
  subtitle,
  style,
  subtitleStyle,
  containerStyle,
  classes,
}) {
  return (
    <div
      style={containerStyle}
      className={`main-title position-relative text-center ${classes}`}
    >
      <h2 className="main-title-title text-capitalize" style={style}>
        {title}
      </h2>
      <h5 className="main-title-subtitle" style={subtitleStyle}>
        {subtitle}
      </h5>
    </div>
  );
}
