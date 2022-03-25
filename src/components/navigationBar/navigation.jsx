import Navbar from 'react-bootstrap/Navbar';
import { Container,Nav,NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useNavigate,useLocation}  from "react-router-dom";

const Navigation = () =>{
  let navigate = useNavigate();
  let location = useLocation();
  const OnClick=(route) => {
    navigate(route + location.search);
  }
    return(
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand >NABIN DHITAL (Hire-React)</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Task 1" id="task-1">
          <NavDropdown.Item onClick={()=>OnClick("/task1/simpleSlider")}>simple slider</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>OnClick("/task1/loadingIcon")}>loading icon</NavDropdown.Item>
          <NavDropdown.Item onClick={()=>OnClick("/task1/progressBar")}>progress bar</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Task 2" id="task-2">
        <NavDropdown.Item onClick={()=>OnClick("/task2/api")}>API</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Task 3" id="task-3">
        <NavDropdown.Item onClick={()=>OnClick("/task3/simpleBarChart")}>simple bar chart</NavDropdown.Item>
        <NavDropdown.Item onClick={()=>OnClick("/task3/mapInterface")}>map interface</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Navigation;