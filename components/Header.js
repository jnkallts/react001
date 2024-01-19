import React from "react";

export default function Header() {
   return (
      <header>
         <nav className="navbar">
            <img className="logo" src="reactlogo.png" alt="logo" />
            <ul className="nav-items">
               <li>About</li>
               <li>Notes</li>
            </ul>
         </nav>
      </header>
   );
}
