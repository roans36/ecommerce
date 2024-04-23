import React from "react"
import { useLocation } from "react-router-dom"


const DetailPage = () => {
  const state = useLocation();
  // const m = state.url.split('=');
  return (
    <>
      <h1>{state.title}</h1>
      <h1>{state.rating}</h1>

    </>
  )
}
export default DetailPage