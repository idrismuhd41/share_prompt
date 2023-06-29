import React from 'react';

function Footer() {
 return (
  <footer className="footer pt-5 pb-3 w-full text-center ">
   <div className='text-gray-800 bg-black'>

    <hr />
   </div>
   <div className="container pt-7 pb-6">
    <div className="footer-content">
     <div className="footer-logo">
      {/* Place your logo or footer branding here */}
      <h2>Prompt Share</h2>
     </div>
    </div>
    <div className="footer-bottom">
     {/* Add additional content for the bottom section of the footer */}
     <p>&copy; {new Date().getFullYear()} IMT Prompt Share. All rights reserved.</p>
    </div>
   </div>
  </footer>
 );
}

export default Footer;
