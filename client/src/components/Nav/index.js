import React from "react";
import "./navbar.css";

function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <a className="navbar-brand" href="/"> 
              deniXone
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
  );
}

export default Nav;






// <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         React Reading List
//       </a>
//     </nav>