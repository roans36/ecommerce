


import React, { useEffect, useState } from "react"

import { HiArrowSmallRight } from "react-icons/hi2"
import AboutUs from "./components/AboutUs";




const HomePage = () => {

  const [time, setTime] = useState(9124620);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevCounter) => prevCounter + 1);
    }, 1100);
    return () => clearInterval(interval);
  }, []);


  // const [makColor, SetMakeColor] = useState(false);
  // function hovFun() {
  //   SetMakeColor(!makColor);
  // }
  return (
    <>
      <header className="sm:block md:items-center" ></header>
      <nav className=" bg-slate-600 "></nav>
      <div className="grid md:grid-cols-2 md:items-center max-[1020px]:block md:m-16 md:p-3 m-1 p-1 ">
        <div className=" mx-auto mb-10 grid w-full justify-center space-x-3 md:p-5  ">
          <img className="static p-4 " src={require("./New folder (2)/Pics/man_watering.png")} alt="" />

        </div>
        <div className="">
          <div className="font-Raleway md:mx-6 md:px-6 max-[1020px]:text-center max-[1020px]:items-center ">
            <div className="text-[62px] font-light   ">Be a <b className="m-0 p-0 font-semibold">Plant Parent </b>
              today</div>
            <div className="text-[62px] font-light">with <span className=" bg-gradient-to-b from-grill to-grilb font-bold bg-clip-text text-transparent">Aranyak</span></div>
            <div className="text-2xl tracking-wide  text-gray-500 mb-5 py-4 my-3 "> First timer or experienced, we have something for you. Take a look at our vast collection of greenery & let us help you transform your household and front/back yard.
            </div>
            <div className="inline-flex lg:block  ">
              <div className="  ">
                <button className='border border-black rounded-full h-12 w-[320px] text-white hover:text-black text-xl cursor-pointer flex  bg-gradient-to-tr from-[#a5f3fc] to-[#164e63] max-[720px]:w-[300px] max-[500px]:w-[270px] outline transition duration-500 hover:outline-offset-8 '>

                  <div className=" my-2 px-2 pl-14">
                    <b>explore catalog</b>
                  </div>
                  <div className="my-3 px-3  ">
                    <HiArrowSmallRight size={25} />
                  </div>
                </button>

              </div>

            </div>

          </div>

        </div >

        <div className=" my-9 mb-10 grid justify-center space-x-3 p-5  items-center md:order-2 ">
          <img className="rounded-lg p-4 " src={require("./New folder (2)/Pics/women_watering.png")} alt="" />
        </div>
        <div className="text-xl max-[1020px]:block md:m-6 font-Raleway my-16 max-[1020px]:items-center max-[1020px]:text-center md:order-1">
          <span className="font-bold text-3xl text-[#124838]">We have got you Covered  </span>
          <div className="my-6 py-0 text-6xl text-[#E8B48E]">
            However Popular  <div className="whitespace-pre-wrap"></div> Or <span className="text-[#E3A476]"> <b> Rare Plant</b></span>  <div className="whitespace-pre-wrap"></div>
            It Is   </div>
          <div className="whitespace-pre-wrap"></div>
          <div className="text-2xl tracking-wide  text-gray-500 mb-5 py-4 my-3">
            Our catalog of plants of fruits and flowers; for indoors and outdoors; is expanding everyday.</div>
          <div className="inline-flex lg:block ">
            <div className="  ">
              <button className='border text-white hover:text-black w-[320px] h-12 flex  text-xl cursor-pointer bg-gradient-to-tr from-[#a5f3fc] to-[#164e63] rounded-full transition duration-500  hover:border-black ring-2 hover:ring-offset-emerald-400 max-[720px]:w-[300px]  max-[500px]:w-[270px]  align-middle'>

                <div className=" py-2 px-2 pl-14 justify-center  ">
                  <b>explore catalog</b>
                </div>
                <div className="my-3 px-3 ">
                  <HiArrowSmallRight size={25} />
                </div>
              </button>

            </div>

          </div>
        </div>


      </div >
      <div className="grid md:grid-cols-3 text-center text-3xl font-Raleway font-bold text-[#065f46] m-4 p-3 items-center align-middle">

        <div className='max-[1020px]:block'>
          <img className="" src={require("./New folder (2)/logo/Counter_1.png")} alt="" />
          <div className="text-orange-300 text-[80px] font-normal">{time}</div>

          <div className="whitespace-pre-wrap"> </div> Plant <div className="whitespace-pre-wrap">Delivered</div>
        </div>
        <div>
          <img src={require("./New folder (2)/logo/Counter_2.png")} alt="" />
          <div className="text-orange-300 text-[80px] font-normal"></div>
          Happy<div className="whitespace-pre-wrap">customers
          </div>
        </div>
        <div>
          <img src={require("./New folder (2)/logo/Counter_3.png")} alt="" />
          <div className="text-orange-300 text-[80px] font-normal">{time} </div> <div className="whitespace-pre-wrap"> </div>
          Growing <div className="whitespace-pre-wrap"></div>Catalog</div>

        <div >

        </div>
      </div>
      <AboutUs />

    </>

  )
}

export default HomePage