import React from 'react'

import { Link } from 'react-router-dom'

export const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/user-profile'>Roster</Link></li>
        <li><Link to='/not-found'>404</Link></li>
      </ul>
    </nav>
  </header>
)