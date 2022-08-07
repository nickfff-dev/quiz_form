import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Announcebar() {
  return (
    <Navbar className="pinkbar" expand="lg">
      <Container fluid>
        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
        <Nav>
            <Nav.Link href="#home">Pink</Nav.Link>
            <Nav.Link href="#features">Menu</Nav.Link>
       
          </Nav>
          <Navbar.Brand href="#home">pink</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Pink2</Nav.Link>
            <Nav.Link href="#features">Menu2</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Announcebar;
