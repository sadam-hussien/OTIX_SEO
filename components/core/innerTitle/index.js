export default function InnerTitle({ sub = false, title, sub2 = false }) {
  return (
    <div className="inner-title-container">
      {sub && !sub2 ? (
        <h4 className="inner-title-sub inner-title text-capitalize">{title}</h4>
      ) : sub2 ? (
        <h5 className="inner-title-sub2 inner-title text-capitalize">
          {title}
        </h5>
      ) : (
        <h3 className="inner-title text-capitalize">{title}</h3>
      )}
    </div>
  );
}
