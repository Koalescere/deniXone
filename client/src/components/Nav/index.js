import React from "react";
import "./navbar.css";

function Nav() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <a className="navbar-brand" href="/"> 
              deni<strong>X</strong>one
         </a>

         <div class="col" id="righttitle">
        <div class="dropdown" id="accountdiv">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user-alt"></i>
            </a>
          
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Account</a>
              <a class="dropdown-item" href="#">Favorites</a>
              <a class="dropdown-item" href="#">Log out</a>
            </div>
          </div>
    </div>

     </nav>
     </div>
  );
}

export default Nav;


