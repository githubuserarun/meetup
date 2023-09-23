import './index.css'

const NotFound = () => (
  <div className="notFoundContainer">
    <img
      className="image"
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <h1 className="notFoundHeading">Page not Found</h1>
    <p className="notFoundPara">
      We are sorry, the page you requested could not be found.
    </p>
  </div>
)

export default NotFound
