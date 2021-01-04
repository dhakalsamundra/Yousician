import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import Icon from "../assets/icons/filter.svg";


const Togglable = React.forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false)

  /**
   * ! 'visible' in displayWhenVisible refers to the item which is toggled
   * * eg: form, buttons etc
   */

  const displayWhenVisible = { display: isVisible ? '' : 'none' }
  const hideWhenVisible = { display: isVisible ? 'none' : '' }

  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisible,
    }
  })

  return (
    <div className='sort'>

    <div className='filter'>
      <button
        id='togglable-btn'
        style={hideWhenVisible}
        onClick={toggleVisible}>{props.buttonLabel}</button>

      <div className='filter-icon'>
        <p>5 - 10</p>

        <div className='img-filter'>
          <img src={Icon} alt='filter icon' />
        </div>

        </div>
        
      <div style={displayWhenVisible} className='togglableContent'>
        {props.children}
        <button onClick={toggleVisible} id='togglable-btn'>HIDE FILTER</button>
      </div>
    </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}

export default Togglable
