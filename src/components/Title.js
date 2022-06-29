import { NavLink } from 'react-router-dom';
import React from 'react'

const Title = () => {
  return (
    <nav>
        <NavLink to='/' ><h1 className="title">Pokemon TCG</h1></NavLink>
    </nav>
  )
}

export default Title