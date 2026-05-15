import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import About from "./pages/About";
import './App.css'

function App(){
  return(
    <>
    <Router>
     <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Rai, Sandara C.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/about">About</Nav.Link>
            <Nav.Link href="#/project">Project</Nav.Link>
            <Nav.Link href="#/contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />


        
        
      </Routes>
    </Router>
  
    
    </>
  )
}
export default App