import React from 'react'
import NavBar from '../components/Navbar'
import "./PageNotFound.css"

const PageNotFound = () => {
  return (
    <div className='PNFWrapper'>
      <NavBar />
      <div className="error">
        404
      </div>
      <div className="errText">
        Page Not Found!
      </div>
    </div>
  )
}

export default PageNotFound