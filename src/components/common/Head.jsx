import React from 'react'
import { Link } from 'react-router-dom'

export const Head = () => {
  return (
       <section className='head'>
            <div className='conatiner flexSB'>
                 <ul className='top'>
                      <li><a href="tel:(+977-9869260495)"><i className='fab fa-facebook-f png'></i><span>(+977)9869260495</span></a></li>
                      <li><a href="mail:info@kash.edu.np"><i className='fab fa-facebook-f png'></i><span>info@kash.edu.np</span></a></li>
                      <li><a href="#"><i className='fab fa-facebook-f png'></i><span>Sorauli, Sainamaina-2, Rupandehi, Lumbini, Nepal</span></a></li>
                 </ul>
                 <ul>
                      <i className='fab fa-facebook-f icon'></i>
                      <i className='fab fa-instagram icon'></i>
                      <i className='fab fa-twitter icon'></i>
                      <i className='fab fa-youtube icon'></i>
                      <li class="nav-item">
            <Link to="/admin">Log In</Link>
          </li>
                 </ul>

            </div>
            
    </section>
  )
}
