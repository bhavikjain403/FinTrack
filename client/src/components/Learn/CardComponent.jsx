import Card from "react-bootstrap/Card";

function CardComponent({ props }) {
  // console.log(props);
  const { title, subtitle, url, content } = props;
  // console.log(title, subtitle, content);
  return (
    <Card style={{ width: "50rem" }} className="border mb-4">
      <Card.Body className="">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{content}</Card.Text>
        <Card.Link href={url}>Go to Resource</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;