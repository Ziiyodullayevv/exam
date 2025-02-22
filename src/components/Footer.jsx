import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="bg-[url('/Vector.svg')] relative !py-[200px] bg-cover bg-center">
        <img
          className='absolute top-[-100px] left-0 right-0 !mx-auto'
          src='/footer.svg'
          alt='logo'
        />
        <div className='container flex justify-between'>
          <div className='flex flex-col gap-4'>
            <img src='/logo.svg' alt='logo' />
            <p>123 Anywhere St., Any City 12345</p>
            <p>123-456-7890</p>
            <p>hellocallcenter@gmail.com</p>
          </div>

          <div className='flex flex-col gap-4'>
            <p>About Us</p>
            <p>Departments</p>
            <p>Appointment</p>
            <p>Timetable</p>
            <p>Testimonials</p>
            <p>Doctors</p>
          </div>

          <div className='flex flex-col gap-4'>
            <p>Blog</p>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>

          <div className='flex flex-col gap-4'>
            <h3>Be Our Subscribers</h3>
            <p>To get the latest news about health from our experts</p>
            <div className=''>
              <input type='text' placeholder='example@email.com' />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#307BC4]'>
        <div className='container text-white flex justify-between !py-5'>
          <div className=''>
            <p>Follow Us</p>
          </div>
          <p>Copyright © 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
