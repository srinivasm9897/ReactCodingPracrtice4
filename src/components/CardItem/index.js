// Write your code here.
import './index.css'

const CardItem = props => {
  const {CardDetails} = props
  const {title, description, className, imgUrl} = CardDetails
  return (
    <li className={`${className} Card-item-styles`}>
      <div>
        <h1 className="head1">{title}</h1>
        <p className="para1">{description}</p>
        <div className="imgCon">
          <img src={imgUrl} className="imgUrl" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
