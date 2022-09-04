import { useState, useEffect, useRef } from 'react'
import styles from './dropdown.module.css'
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
        className={styles.item}
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
        <label className={styles.label}>{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`${styles.dropdown} ${open ? `${styles.visible} ${styles.active}` : ''}`}
        >
          <div className={styles.choose}>

          <div className={styles.text}>{selected.label}</div>
          <HiArrowCircleDown className={styles.downArrow}/>
          </div>
          <div className={`${styles.menu} ${open ? styles.visible : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
