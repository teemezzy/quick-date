import React from 'react';
import './ToggleSwitch.css';


const ToggleSwitch = () => {
  return (
    <div className='toggle-switch-wrapper'>                        
        <input type="checkbox"  className='toggle-switch'/>
        <span className='toggle-slider'></span>
    </div>
  )
}

export default ToggleSwitch