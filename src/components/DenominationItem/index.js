// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationis, onchangemovey} = props
  const {value} = denominationis
  const valueofthebutton = () => {
    onchangemovey(value)
  }
  return (
    <li className="listis">
      <button className="button" type="button" onClick={valueofthebutton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
