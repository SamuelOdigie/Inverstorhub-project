import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
function Sidebar() {
  return (
    <div className='sidebar-container'>
        <ul>
            <li>
                <Link to='./Home'>Home <i class="fa-solid fa-house-user"/></Link>

            </li>
            <li>
                <Link to='./Crypto'>Crypto <i class="fa-brands fa-bitcoin"/></Link>

            </li>
            <li>
                <Link to='./Stocks'>Stocks <i class="fa-solid fa-sack-dollar"/></Link>

            </li>
            <li>
                <Link to='Portfolio'> Portfolio<i class="fa-solid fa-wallet"/> </Link>

            </li>
            <li>
                <Link to='AboutUs'>About <i class="fa-solid fa-address-card"/></Link>

            </li>
           
        </ul>

    </div>
  )
}

export default Sidebar