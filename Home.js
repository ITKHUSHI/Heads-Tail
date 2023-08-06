import React from 'react';
import { Link } from 'react-router-dom';
 import {Button,Row, Col} from 'react-bootstrap'

const Home = () => {
  return (
    <>
    <div className='main'>
    <h2 className='nav-active'>Home Page</h2>
    <nav className="nav bg-black my-2">
    <li className='nav-item'><Link to="/about" className='nav-link'>About </Link></li>
    <li className='nav-item'>  <Link to="/head-tail" className='nav-link'>Head & Tail</Link>
   </li>
    
    </nav>
    <div className='container-xxl '>
      <h2>Welcome to are webstie</h2>
      <p>
          Explore our content and learn about the latest in web development.
        </p>
        <Button variant="outline-light">Get Started</Button>

        <div className="my-5">
        <Row>
          <Col md={4}>
            <h2>Learn</h2>
            <p>
              Expand your skills with our comprehensive tutorials and guides on
              web development technologies.
            </p>
          </Col>
          <Col md={4}>
            <h2>Create</h2>
            <p>
              Put your learning into practice by creating amazing web
              applications and projects.
            </p>
          </Col>
          <Col md={4}>
            <h2>Connect</h2>
            <p>
              Join our community of developers, share your knowledge, and
              collaborate on exciting projects.
            </p>
          </Col>
        </Row>
   
    </div>
     </div> 
     <div className="card text-bg-info mb-3 mx-5">
  <div className="card-header">Head & Tail</div>
  <div className="card-body">
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate officia fugit magni libero delectus neque quae deleniti. Laborum quaerat, temporibus tenetur doloremque eum veniam aut distinctio, sequi iste similique ipsa!</p>
  </div>
</div>
   
 </div>
    
    
    </>
  );
};

export default Home;
