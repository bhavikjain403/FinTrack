import Card from "react-bootstrap/Card";

function CardComponentTwo({ info }) {
    // console.log(props);
    const { name, sector, applicable_states, url } = info;
    // console.log(title, subtitle, content);
    // console.log(info);
    // console.log(info.key())
    return (
        <Card style={{ width: "50rem" }} className="border mb-4 shadow">
            <Card.Body className="">
                <Card.Title>Scheme: {name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Sector: {sector}</Card.Subtitle>
                <Card.Text>Applicable to: {applicable_states}</Card.Text>
                <Card.Link href={url}>Go to Scheme</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default CardComponentTwo;