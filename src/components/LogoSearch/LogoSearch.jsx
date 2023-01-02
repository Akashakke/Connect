import React from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'
import { Link } from 'react-router-dom'

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <Link to={'../home'}>
      <img src="https://www.logoarena.com/contestimages/public_new/2211/5203_1361717320_connect2.png" alt="" width={"50px"} />
        </Link>
        
        <div className="Search">
            <input type="text" placeholder="#Explore" />
            <div className="s-icon">
                <UilSearch/>
            </div>
        </div>
    </div>
  )
}

export default LogoSearch