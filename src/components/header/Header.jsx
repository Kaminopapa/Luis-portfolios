import React, { useState } from 'react'

import './header.css'
import './intro.css'
import CTA from './CTA.jsx'
import guitar from '../../assets/guitar.png'
import keyboard from '../../assets/keyboard.png'
import sunny from '../../assets/sunny.png'
import cat from '../../assets/eilu.png'
import tri from '../../assets/triangle.png'
import universal from '../../assets/universal1.png'
import HeaderSocials from './HeaderSocials'
import Intro from './Intro'


const Header = () => {
  const [MousePosition, setMousePosition] = useState({ left: 0, top: 0 })
  function hanldeMouseMove(ev) { setMousePosition({ left: ev.pageX, top: ev.pageY }); }
  return (
    <header className='blackHeader'>
      {/* this type of naming classes is called bim */}
      <div className="container header_container">

        <HeaderSocials />
        <div className="imgContainer" onMouseMove={(ev) => hanldeMouseMove(ev)}>
          <Intro />
          <CTA />
          <img className="keyboard" src={keyboard} style={{ left: MousePosition.left * -8 / 250, top: MousePosition.top * -8 / 250 }} />
          <img className="sunny" src={sunny} style={{ width:"400px",left: MousePosition.left * 5 / 250, top: MousePosition.top * 5 / 250 }} />
          <img className="guitar" src={guitar} style={{ width:"400px" ,left: MousePosition.left * 4 / 250, top: MousePosition.top * 4 / 250 }} />
          <img className="cat" src={cat} style={{ width:"400px", left: MousePosition.left * 20 / 250, top: MousePosition.top * 20 / 250 }} />
          <img className="universal" src={universal} style={{ width:"500px",left: MousePosition.left * -10 / 250, top: MousePosition.top * 10 / 250 }} />
        </div>



        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header