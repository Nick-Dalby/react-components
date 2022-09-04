import { useState } from "react"
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import './stars.css'

const Stars = () => {
  const [amount, setAmount] = useState(0.5)
  const stars = amount

  const starIcons = Array.from({ length: 5 }, (_, index) => {
  const number = index + 0.5
  return <span key={index}>
  {stars >= index + 1 ? <BsStarFill className="star"/> : stars >= number ? <BsStarHalf className="star"/> : <BsStar className="star"/>}
    </span>
})
  
  const addStars = () => {
    setAmount(amount + 0.5)
  }
  
  const removeStars = () => {
    setAmount(amount - 0.5)
  }

return (
  <div className="star-container">
    <div className='stars'>{starIcons}</div>
    <div className='buttons'>
    <button onClick={removeStars} disabled={amount === 0}>remove stars</button>
    <button onClick={addStars} disabled={amount === 5}>add stars</button>
    </div>
  </div>
)
}
export default Stars