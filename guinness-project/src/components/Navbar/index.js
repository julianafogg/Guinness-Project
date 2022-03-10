import React from 'react'
import "./navbar.scss"

export const Navbar = (props) => {
  return(
    <section>
        <div className='bg'></div>
        <header>
           <a href='/#' className='logo'>Guinness</a>
           <ul className='navigation'>
             <li> <a href='/#' className='active'>Our Beers</a></li>
             <li> <a href='/#'>Our Legacy</a></li>
             <li> <a href='/#'>Our Community</a></li>
           </ul>
        </header>
    </section>
   )
 }