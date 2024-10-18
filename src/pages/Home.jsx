import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Make sure to import Link

const Home = () => {
 
  return (
    <div >
      <div className="greet">
        <img src="src/assets/boy.jpg" alt="boy" /> {/* Add alt attribute for accessibility */}
        <div id="name">Hi Rustin!</div>
        <div id="name">DAY-FLOW</div>
      </div>

      <div className="category">
        <div id='buttonc'>
          <Link to="/Academics" className="page button">Academics</Link> {/* Ensure Link is correctly used */}
        </div>
        <div id='buttonc'>
          <Link to="/Health" className="page button">Health</Link> {/* Ensure Link is correctly used */}
        </div>
        <div id='buttonc'>
          <Link to="/Personal" className="page button">Personal Growth</Link> {/* Ensure Link is correctly used */}
        </div>
        <div id='buttonc'>
          <Link to="/Household" className="page button">Household</Link> {/* Ensure Link is correctly used */}
        </div>
        <div id='buttonc'>
          <Link to="/Shopping" className="page button">Shopping List</Link> {/* Ensure Link is correctly used */}
        </div>
      </div>
    </div>
  );
}

export default Home;


