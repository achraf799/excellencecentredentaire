import {FiMapPin} from 'react-icons/fi'
import "./map.css"
export const LocationPin = ({ text }) => (
    <div className="pin">
      <FiMapPin  />
      <p className="pin-text">{text}</p>
    </div>
  )