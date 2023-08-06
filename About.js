import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  
  return (
    <div>
      <h2>About Page</h2>
      <nav className="nav bg-black my-2">
    <li className='nav-item'><Link to="/" className='nav-link'>Home </Link></li>
    <li className='nav-item'> <Link to="/head-tail" className='nav-link'>Head & Tail</Link>
 </li>
    
    </nav>
    <div className='md-6'>
      <h3>About us</h3>
      <p>
            Welcome to our About page! We are a dedicated team of individuals
            passionate about creating awesome things using React and Bootstrap.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula ac ipsum eu ultricies. Ut euismod, velit a pellentesque
            vulputate, arcu neque efficitur ligula.
          </p>
          <p>
            Our mission is to provide you with high-quality code examples,
            tutorials, and resources to help you excel in your web development
            journey. Feel free to explore our website and reach out to us if
            you have any questions or suggestions.
          </p>
          <img src="https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0" className='img-thumbnail mx-2 my-3' alt="img"/>
    </div>
   
     <div className='bg-primary mx-2 '>
     <footer className='bg-dark text-light py-4 '>
      <div className='container'>
        <ul>
        <li>
        <i className="fab fa-contact">Contact</i></li>
       <li> <i className="fab fa-email">Email</i></li>
       <li> <i className="fab fa-github">Github</i></li>
        <li> <i className="fab fa-instagram">Instagram</i></li>
       
        <li>
        <i className="fab fa-facebook">Facebook</i>      
        </li>
        </ul>
      </div>
     </footer>
     </div>
    </div>
  );
};

export default About;
 