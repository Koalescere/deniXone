import React from "react";
import "./navbar.css";

function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <a className="navbar-brand" href="/"> 
              deni<strong>X</strong>one
         </a>

         <div className="col" id="righttitle">
        <div className="dropdown" id="accountdiv">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user-alt"></i>
            </a>
          
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Account</a>
              <a className="dropdown-item" href="#">Favorites</a>
              <a className="dropdown-item" href="#">Log out</a>
            </div>
          </div>
    </div>

     </nav>
     </div>
  );
}

export default Nav;


