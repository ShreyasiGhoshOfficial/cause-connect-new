import React from 'react'
import "./Home.css"
import NavBar from '../components/Navbar'

const Home = () => {
  return (
    <div className="HomeContainer" data-testid="home-container">
      <NavBar />
        <div className="heading">
          <span>Welcome to CauseConnect</span>
        </div>
        <div className="headingLine">
          <span>A Fundraising Platform</span>
        </div>
    </div>
  )
}

export default Home