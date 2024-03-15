import React from 'react'
import NavBar from '../components/Navbar'
import ViewFund from '../components/ViewFund'
import "./ListFundPage.css"

const ListFundPage = () => {
  return (
    <div className="listFundPage">
      <NavBar />
      <ViewFund />
    </div>
  )
}

export default ListFundPage