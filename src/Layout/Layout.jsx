import React from 'react'
import Header  from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from "../Router/Router"

function Layout() {
  return (
    <>
    <Header />
    <Routers />
    <Footer />
    </>
  )
}

export default Layout