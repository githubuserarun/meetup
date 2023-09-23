import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisteredContext from '../../context/RegisteredContext'
import './index.css'

const Home = props => {
  const onRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisteredContext.Consumer>
      {value => {
        const {isRegistered, name, topic} = value

        return (
          <div>
            <Header />

            {isRegistered === true ? (
              <div className="homeContainer">
                <h1 className="name">Hello {name}</h1>
                <p className="topic">Welcome to {topic}</p>
                <img
                  className="image"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            ) : (
              <div className="homeContainer">
                <h1 className="homeHeading">Welcome to Meetup</h1>
                <p className="homePara">Please register for the topic</p>
                <Link to="/register">
                  <button type="button" className="button" onClick={onRegister}>
                    Register
                  </button>
                </Link>

                <img
                  className="image"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </div>
            )}
          </div>
        )
      }}
    </RegisteredContext.Consumer>
  )
}
export default Home
