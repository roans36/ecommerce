import React from "react"

import { Outlet } from "react-router-dom"
// import NaviBars from "./components/NaviBars"
import NavBar from "./NavBar"



const RootLayout = () => {
  return (
    <>
      <NavBar />
      {/* <NaviBars /> */}
      <Outlet />

    </>
  )
}
export default RootLayout