import React from 'react'
import Fund from '../components/Fund'
import NavBar from '../components/Navbar'
import "./FundPage.css"

const FundPage = () => {
  return (
    <div className='fundWrapper'>
      <NavBar />
      <Fund />
    </div>
  )
}

export default FundPage