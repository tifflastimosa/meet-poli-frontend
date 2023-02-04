import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";


function App() {


  return (
    <div className="App">
      <header>
      <Navbar class="navbar navbar-expand-lg navbar-light bg-light">
        <Container className="container-fluid">
          <Navbar.Brand className="brand" as={Link} to={"/"}>
            Meet Poli
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
            
            <Nav className="ml-auto">

              <Nav.Link as={Link} to={"/locations"}>
                Blank
              </Nav.Link>
            </Nav>

         
        </Container>
      </Navbar>
      </header>

      
      <Routes>
        <Route exact path={"/"} element={
          <LandingPage />
        }/>
      </Routes>

    </div>
  );
}

export default App;

