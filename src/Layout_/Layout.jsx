import React from 'react'
import Header  from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Routers from "../router/Routers"

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