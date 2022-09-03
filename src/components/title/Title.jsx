import './title.css'

const Title = ({ title }) => {
  return (
    <div className='title'>
    <h2>{title}:</h2>
    <div className="line"></div>
    </div>
  )
}
export default Title