import Card from "react-bootstrap/Card";

function CardComponentOne( {info} ) {
  // console.log(props);
  //const { title, subtitle, url, content } = props;
  // console.log(title, subtitle, content);
  return (
    <Card style={{ width: "50rem" }} className="border mb-4 shadow">
      <Card.Body className="">
        <Card.Title>Bank Name: {info["Bank FD Names"]}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">General Citizens: {info["For General Citizens (p.a.)"]}</Card.Subtitle>
        <Card.Text>For Senior Citizens: {info["For Senior Citizens (p.a)"]}</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default CardComponentOne;