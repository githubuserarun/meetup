import Header from '../Header'
import RegisteredContext from '../../context/RegisteredContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <RegisteredContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        addError,

        registerName,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          addError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }
      return (
        <div>
          <Header />
          <div>
            <div className="registerContainer">
              <img
                className="registerImg"
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <form className="form" onSubmit={submitRegistration}>
                <h1 className="registerHeading">Let us join</h1>
                <div className="inputContainer">
                  <label className="label" htmlFor="name">
                    NAME
                  </label>
                  <input
                    className="input"
                    id="name"
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="Your name"
                  />
                </div>
                <div className="inputContainer">
                  <label className="label" htmlFor="topic">
                    Topics
                  </label>
                  <select
                    className="select"
                    id="topic"
                    value={topic}
                    onChange={onChangeTopic}
                  >
                    {topicsList.map(each => (
                      <option value={each.id} key={each.id}>
                        {each.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="registerButton" type="submit">
                  Register Now
                </button>
                {showError === true ? (
                  <p className="errorMsg">Please enter your name</p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      )
    }}
  </RegisteredContext.Consumer>
)
export default Register
