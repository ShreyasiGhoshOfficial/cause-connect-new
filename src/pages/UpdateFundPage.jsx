import React from 'react'
import NavBar from '../components/Navbar'
import UpdateFund from '../components/UpdateFund'
import './UpdateFundPage.css'

const UpdateFundPage = () => {
  return (
    <div className='updateFundPage'>
      <NavBar />
      <UpdateFund />
    </div>
  )
}

export default UpdateFundPage