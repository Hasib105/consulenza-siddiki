import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href='/' className="btn btn-ghost text-xl">Consulenza Siddiki</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Services</a>
          </li>

          <li>
            <a>About</a>
          </li>

          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar