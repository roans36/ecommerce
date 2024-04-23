const AboutUs = () => {
  return (

    <>
      <div className="font-Raleway m-2  md:m-6  py-16 max-[720px]:text-center md:px-10 p-5 ">
        <div className="bold text-[20px] "><b>About Us</b></div>
        <div className=" text-orange-400 text-[64px]">Our <b>Core </b>Team</div>
        <div className=" text-orange-400 text-[64px]">And Their <b>Philosophy </b></div>
        <div className="grid md:grid-cols-2 gap-9 m-2 py-4">
          <div>

            In Aranyak, we have a great team to help you manage and maintain all your healthy plants simultaneously. We help you to change your outlook on life with our huge collection of greenery. Refer to our collection of plants for indoor and outdoor vegetation and beautification.

          </div>
          <div>Our wide variety of plants can help you get stimulated to creative works and help you maintain your mental health while also uplifting your way of life. Aranyak avails an efficient team of designers to help you plan your indoor and outdoor beautification works in no time. Enjoy your journey with Aranyak!</div>
        </div>
        <div className="grid max-[1020px]:block grid-cols-2 mt-12 pl-0 md:items-center m-3 ">
          <div className=" static border rounded-3xl">
            <img className="rounded-3xl " src={require("./peoples/badhon.png")} alt="" />
          </div>
          <div className="max-[1020px]:absolute bg-white border rounded-3xl border-orange-300 md:h-44 md:w-[680px] overflow-hidden mt-0 lg:-ml-24 max-[720px]:text-center max-[1020px]:-mt-9 ">
            <div className="m-4 ">

              <h1 className="my-3 m-2 text-2xl font-bold ">Meet Badhon</h1>
              <p>Dhruba Badhon lives in Dhaka with her husband, Raihan Nil, their daughter, Shimul and two cats, Pantha and Sanji. She began her professional carrier at a scam house named Hexit. At the summer of 2069, she created a ...</p>
            </div>

          </div>

        </div>


        <div className="m-10 ">
          <div className="text-[#E3A476] text-5xl p-5 font-light text-center">Meet The <b className="font-extrabold">Team</b></div>
        </div>
        <div className="grid min-[960px]:grid-cols-3 min-[760px]:grid-cols-2 justify-items-center m-16 p-10">
          <div className=" items-center">
            <img className=" border border-orange-400 w-[226px] h-[220px] rounded-3xl " src={require("./peoples/6.png")} alt="James T. Kirk" />
            <div className=" block text-center text-xl font-[#1C4F40]  font-extrabold">James T. Kirk</div>
            <div className=" block text-center ">CFO</div>
            <div className=" block text-center m-5 text-[14px]text-[#B8B8B8]">We're trying to teach you a<div className="whitespace-nowrap"> </div>technique here and how to use</div>
          </div>
          <div className=" items-center">
            <img className=" border border-orange-400 w-[226px] h-[220px] rounded-3xl " src={require("./peoples/5.png")} alt="James T. Kirk" />
            <div className=" block text-center text-xl font-[#1C4F40]  font-extrabold">Montgomery Scott</div>
            <div className=" block text-center ">Accounts</div>
            <div className=" block text-center m-4 text-[14px]text-[#B8B8B8]">Just make a decision and let it <div className="whitespace-nowrap"> </div>go.</div>
          </div>
          <div className=" items-center">
            <img className=" border border-orange-400 w-[226px] h-[220px] rounded-3xl " src={require("./peoples/4.png")} alt="James T. Kirk" />
            <div className=" block text-center text-xl font-[#1C4F40]  font-extrabold">Nyota Uhura</div>
            <div className=" block text-center ">Marketing</div>
            <div className=" block text-center m-4 text-[14px]text-[#B8B8B8]">We'll throw some old gray<div className="whitespace-nowrap"> </div>clouds in here just sneaking</div>
          </div>
          <div className=" items-center">
            <img className=" border border-orange-400 w-[226px] h-[220px] rounded-3xl " src={require("./peoples/3.png")} alt="James T. Kirk" />
            <div className=" block text-center text-xl font-[#1C4F40]  font-extrabold">Hikaru Sulu</div>
            <div className=" block text-center ">CFO</div>
            <div className=" block text-center m-4 text-[14px]text-[#B8B8B8]">Everything's not great in life, but<div className="whitespace-nowrap"> </div> we can still find beauty in it.</div>
          </div>  <div className=" items-center">
            <img className=" border border-orange-400 w-[226px] h-[220px] rounded-3xl " src={require("./peoples/2.png")} alt="James T. Kirk" />
            <div className=" block text-center text-xl font-[#1C4F40]  font-extrabold">Pavel Chekov</div>
            <div className=" block text-center ">CTO</div>
            <div className=" block text-center m-4 text-[14px]text-[#B8B8B8]">That is when you can experience <div className="whitespace-nowrap"> </div>true joy, when you have no fear.</div>
          </div>  <div className=" items-center">
            <img className=" border border-orange-400 w-[226px] h-[220px] rounded-3xl " src={require("./peoples/1.png")} alt="James T. Kirk" />
            <div className=" block text-center text-xl font-[#1C4F40]  font-extrabold">Leonard McCoy</div>
            <div className=" block text-center ">Human resource</div>
            <div className=" block text-center m-4 text-[14px]text-[#B8B8B8]"><div className="whitespace-nowrap"> </div>Let's make a nice big leafy tree.</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutUs