import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>

      <div style={{ backgroundColor: 'black', width: '100%', height: '620px', marginTop: '300px' }}>
        <div style={{ width: '100%', height: "35px", backgroundColor: 'gray', textAlign: 'center', color: 'white' }}>
          <h4 style={{ marginTop: "10px" }}>Back to Top</h4>
        </div>

        <div style={{ display: 'block', fontSize: '20px', color: 'white', padding: '10px', marginLeft: '50px' }}>
          <h3 style={{ marginTop: '100px', gap: '30px' }}>QUICK LINKS</h3>
          <h5>FAQs</h5>
          <h5>Search</h5>
          <h5>About Us</h5>
          <h5>Authenticity Check</h5>
          <h5>Experience Store</h5>
          <h5>Contact</h5>
          <h5>Blogs</h5>
        </div>


        <div style={{ display: 'block', fontSize: '15px', color: 'white', padding: '10px', marginLeft: '350px' }}>
          <h3 style={{ marginTop: '-280px', gap: '20px' }}>SHOP BY CATEGORY</h3>
          <h5 >Cricket</h5>
          <h5>Football</h5>
          <h5>Badminton</h5>
          <h5>Tennis</h5>
          <h5>Swimming</h5>
          <h5>Football</h5>
        </div>

        <div style={{ display: 'block', fontSize: '15px', color: 'white', padding: '10px', marginLeft: '690px' }}>
          <h3 style={{ marginTop: '-303px', gap: '20px' }}>LEGAL</h3>
          <h5>Privacy Policy</h5>
          <h5>Return policy</h5>
          <h5>Cancellation & Refund Policy</h5>
          <h5>Shipping Policy</h5>
          <h5>Terms of Service</h5>
        </div>


        <div style={{ display: 'block', fontSize: '15px', color: 'white', padding: '10px', marginLeft: '1040px' }}>
          <h3 style={{ marginTop: '-325px', gap: '20px' }}>CONNECT WITH US</h3>
          <h5>Facebook <img style={{ width: '19px', height: '20px' }} src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt="" /></h5>

          <h5>Twitter <img style={{ width: '27px', height: '30px' }} src="https://img.freepik.com/free-vector/twitter-app-new-logo-x-black-background_1017-45425.jpg?semt=ais_hybrid&w=740&q=80" alt="" /></h5>
          <h5>Instagram <img style={{ position: 'absolute', width: '22px', height: '24px', marginLeft: '10px', marginTop: '2px' }} src="https://wallpapers.com/images/high/instagram-logo-whiteon-black-background-h95spjnbcwk0lg3t.png" alt="" /></h5>
        </div>

        <div style={{ marginTop: '70px',width:'30px',height:'30px',textDecoration:"none"}}>
          <Dropdown style={{ fontSize: '20px', marginTop: '75px', width: '15', height: '10px', marginLeft: '40px',textDecoration:"none" }}>
            <Dropdown.Toggle style={{ height: '40px', backgroundColor: 'gray', color: 'white',textDecoration:'none',border:"none" }}>English</Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: 'white',textDecoration:'none' }}>
              <Dropdown.Item style={{ backgroundColor: 'white', textDecoration: 'none',color:'white' }} href="Admin"><Link style={{textDecoration:"none",color:'black'}}>Hindi</Link></Dropdown.Item>
              <Dropdown.Item style={{backgroundColor: 'white',textDecoration: 'none',color:'white'}} href="#/action-2"><Link style={{textDecoration:"none",color:'black'}}>japan</Link></Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </div>



        <div style={{ width: '18%', height: '80px', textAlign: 'center', marginTop: '-50px', marginLeft: "67%" }}>
          <h5 style={{ color: 'white' }}>Call us:</h5>
          <h5 style={{ color: "gray" }}>8109097800</h5>
        </div>


        <div style={{ width: '19%', height: '8px', textAlign: 'center', marginLeft: "81%", marginTop: '-80px' }}>
          <h5 style={{ color: 'white' }}>Email us:</h5>
          <h5 style={{ color: "gray" }}>amalamal@gmail.com</h5>
        </div>


        <div>
          <h5> <img style={{ width: '37px', height: '48px', marginLeft: '144px', marginTop: '8px' }} src="https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_India.svg" alt="" /></h5>
        </div>

      </div>
    </div>
  )
}

export default Footer

