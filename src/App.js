import CardItem from './components/CardItem/index'

import './App.css'

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card-1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card-2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card-3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card-4',
  },
]

const App = () => (
  <div className="bg-container">
    <div className="description">
      <h1 className="head"> Learn 4.0 Technologies </h1>
      <p className="para">
        Get trained by alumni of IITs and top companies Like
        Amazon,Microsoft,Intel,Nvidia,Qualcomm.Learn Directly From Professionals
        Involved In Product Development.
      </p>
    </div>
    <ul className="ul1">
      {cardsList.map(eachCard => (
        <CardItem CardDetails={eachCard} key={eachCard.id} />
      ))}
    </ul>
  </div>
)

export default App
