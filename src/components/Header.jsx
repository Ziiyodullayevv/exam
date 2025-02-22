import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className=' backdrop-blur-3xl !py-3'>
      <div className='container text-center'>
        <div className='header-parent'>
          <div className='header-left flex items-center text-start gap-4'>
            <img src='/logo.svg' alt='logo' />
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={'/'}
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={'/find'}
            >
              Find Doctor
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={'/blog'}
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={'/contact'}
            >
              Contact
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={'/department'}
            >
              Department
            </NavLink>
          </div>

          <div className='header-right flex items-center gap-5'>
            <img src='/search.svg' alt='search' />
            <img src='/menu.svg' alt='menu' />
          </div>
        </div>
      </div>
    </header>
  );
}
