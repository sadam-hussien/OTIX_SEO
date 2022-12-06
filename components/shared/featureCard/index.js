import { Card } from "react-bootstrap";

export default function FeatureCard({ icon, title, desc, style, classes }) {
  return (
    <Card
      className={`border-0 text-center feature-card ${classes}`}
      style={style}
    >
      <span className="icon">{icon}</span>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center text-muted">{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}
