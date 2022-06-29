import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="welcome">
      <p className="welcome__text">
        This is a Fan Project to start please <NavLink to='/' className="welcome__link">Click Here</NavLink>
      </p>
    </div>
  )
}

export default NotFound