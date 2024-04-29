import React from 'react'
import './scrollup.css'

function Scrollup() {
    window.addEventListener("scroll", function (){
        const scrollUp = document.querySelector(".scroll-up");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll")
    })
  return (
    <a href="#" className='scroll-up'>
        <i class="uil uil-arrow-up scrollup-icon"></i>
    </a>
  )
}

export default Scrollup
