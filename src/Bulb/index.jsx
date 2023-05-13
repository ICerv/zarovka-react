import React from "react";
import './style.css'

const Bulb = ({ on }) => {
  return (
    <div className={on ? 'bulb bulb--on' : 'bulb bulb--off'}></div>
  )
}
export default Bulb