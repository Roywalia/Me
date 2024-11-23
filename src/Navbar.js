import React from 'react';
import me from './me3.png';

function Navbar() {

  return (
    <nav className="navbar navbar-light w-100 position-fixed" style={{ backgroundColor: 'darkcyan',zIndex:'999',height:'8vh' }}>
      <div className="container container_nav d-flex flex-row align-items-center justify-content-between">
        {/* Logo Section */}
        <div className="nav-item">
          <img src={me} alt="Logo" className="img-fluid" style={{ width: '53px', maxWidth: '100%' }} />
        </div>

        {/* Navigation Links */}
        <div className="d-flex flex-row">
          <div className="nav-item">
            <a href='#aboutme' className="nav-link p-2 px-5 justify-content-center d-flex" style={{ cursor: 'pointer' }}>About Me</a>
          </div>
          <div className="nav-item">
            <a href='#skills' className="nav-link p-2 px-5 justify-content-center d-flex" style={{ cursor: 'pointer' }}>Skills</a>
          </div>
          <div className="nav-item">
            <a href='#projects' className="nav-link p-2 px-5 justify-content-center d-flex" style={{ cursor: 'pointer' }}>Projects</a>
          </div>
          <div className="nav-item">
            <a href='#experience' className="nav-link p-2 px-5 justify-content-center d-flex" style={{ cursor: 'pointer' }}>Experience</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
