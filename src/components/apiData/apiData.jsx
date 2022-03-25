import { Card} from "react-bootstrap";

const ApiDataCard = ({data}) =>{
    return(
        <Card style={{width:"450px"}} className="text-center text-secondary m-5 min-w-50">
        <Card.Header style={{textAlign:"left"}}>id: {data.id} <br/>  name: {data.name} </Card.Header>
        <Card.Body>
            <Card.Title>{`${data.title} [issue_number:${data.number}]`}</Card.Title>
            <Card.Text style={{height:"100px", overflow:"hidden", textOverflow:"ellipsis"}}>
            {`state: ${data.state}`}<br/>
            {data.body}
            </Card.Text>
            <Card.Link target="_blank" href={data.html_url} className="btn btn-primary" variant="primary">Go Issue Page</Card.Link>
        </Card.Body>
        <Card.Footer className="text-muted">
            <span>Created: {new Date(data.created_at).toDateString()}</span><br/>
            <span className="ml-auto inline-block">last update: {new Date(data.updated_at).toDateString()}</span>
        </Card.Footer>
        </Card>
    )
}
export default ApiDataCard;