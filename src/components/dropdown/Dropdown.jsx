import { useState, useEffect, useRef } from 'react'
import './dropdown.css'
import { HiArrowCircleDown } from 'react-icons/hi'


const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return
      }
      setOpen(false)
    }
    document.body.addEventListener('click', onBodyClick, { capture: true })

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true })
    }
  }, [])

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null
    }

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    )
  })

  return (
    <div ref={ref}>
      <div>
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`dropdown ${open ? 'visible active' : ''}`}
        >
          <div className="choose">

          <div className="text">{selected.label}</div>
          <HiArrowCircleDown className='down-arrow'/>
          </div>
          <div className={`menu ${open ? 'visible' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
