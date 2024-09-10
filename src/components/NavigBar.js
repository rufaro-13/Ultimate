

'use client'
import { useState } from 'react';
//import {FaEnvelopeOpenText,FaMobileScreenButton} from 'react-icons/fa6';
import {  Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
//import {IconContext} from "react-icons";
export default function NavbarWithCTAButton() {


  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

  return (
<div className=' bg-inherit fixed w-full z-20 top-0 start-0'>
 

    <Navbar
      fluid
      className={
        colorChange
            ? "navbar colorChange text-navtitle"
            : "bg-inherit text-navtitle h-4"
    }
    >
      <Navbar.Brand className='pt-0 pb-'>
        <Link to="/"> <img alt="Flowbite React Logo" className=" logo mr-3 md:h-28 sm:h-24" src={logo} style={{width:'100px',height:'100px'}} /></Link>
        <span className={
        colorChange
            
            ? "navbar colorChange text-navtitle self-center whitespace-nowrap  text-sm md:text-2xl font-extrabold"
            : " md:bg-inherit text-darkbluetheme self-center whitespace-nowrap text-sm md:text-2xl font-extrabold"
    }>
          Ultimate Step Support 
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-darkbluetheme">
        
        <Navbar.Toggle className='bg-darkbluetheme' />
      </div>
      <Navbar.Collapse className={
        colorChange
            ? "navbar colorChange text-navtitle"
            : " bg-inherit text-darkbluetheme"
    }>
        <Link
          active
          to="/"
        >
          <p className=' font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
            Home
          </p>
        </Link>
        <Link to="/about" className=' font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
          About
        </Link>
        <Link to="/activities" className=' font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
         Activities
        </Link>
        {/* <div className=' font-bold md:text-lg'>
          <Dropdown
          inline
          label="Domiciliary"
          className=' font-bold md:text-lg bg-navcolour hover:bg-icyteal hover:text-crystalteal'

        >
        <Dropdown.Header className={
        colorChange
            ? "navbar colorChange text-navtitle"
            : " bg-inherit text-darkbluetheme"
    }>
        <ul class="py-2 text-sm  dark:text-gray-400">
        <Link to="/social" className=' font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Social Inclusion
        </Link><br/>
        <Link to="/personal" className=' font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Personal Care
        </Link><br/>
        <Link to="/sitting" className=' font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
          Sitting Call
        </Link><br/>
                </ul>
          </Dropdown.Header>
          
        </Dropdown> </div>*/}
        <Link to="/services" className=' font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
          Services
        </Link>
        <Link to="/careers" className=' font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
          Careers
        </Link>
        
        <Link to="/contact" className=' font-bold md:text-lg hover:bg-icyteal hover:text-crystalteal'>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
