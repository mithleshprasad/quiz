import React from 'react';
function NavBar() {
  return (
    
<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Quiz Game</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Score_Card</a>
        </li>
       
       
      </ul>

   
    </div>
  </div>
</nav>







 
  

  );
}

export default NavBar;
