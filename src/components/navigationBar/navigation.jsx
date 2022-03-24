import Navbar from 'react-bootstrap/Navbar';
import { Container,Nav,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () =>{
    return(
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >NABIN DHITAL (Hire-React)</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Task 1" id="task-1">
          <NavDropdown.Item ><Link className='link' to={"/task1/simpleSlider"}>simple slider</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link className='link' to={"/task1/loadingIcon"}>loading icon</Link></NavDropdown.Item>
          <NavDropdown.Item ><Link className='link' to={"/task1/progressBar"}>progress bar</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Task 2" id="task-2">
        <NavDropdown.Item ><Link className='link' to={"/task2/api"}>API</Link></NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Task 3" id="task-3">
        <NavDropdown.Item ><Link className='link' to={"/task3/simpleBarChart"}>simple bar chart</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link className='link' to={"/task3/mapInterface"}>map interface</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;