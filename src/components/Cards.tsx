const Cards = () => {
  return (
    <div>
<section className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 px-4 pb-16 h-[400px] mt-9">

  <div className="bg-white text-gray-800 shadow-md p-6 w-[328px] h-[320px] pl-9">

  <div className="w-[70px] h-[76px] rounded-lg bg-[#FFDCD1] mb-6"></div>
    <h5 className="font-bold text-base mb-2">training Courses</h5>

        <div className="w-[50px] h-[2px] bg-[#E74040] mt-5"></div>

        <p className="text-[#737373] font-bold mt-6">
            The gradual accumulation of information about atomic and small-scale behaviour...
        </p>
  </div>

  <div className="bg-white text-gray-800 shadow-md p-6 w-[328px] h-[320px] pl-9">

  <div className="w-[70px] h-[76px] rounded-lg bg-[#B9EAA8] mb-6"></div>
        <h5 className="font-bold text-base mb-2">2,769 online courses</h5>

            <div className="w-[50px] h-[2px] bg-[#E74040] mt-5"></div>
            
                <p className="text-[#737373] font-bold mt-6">
                    The gradual accumulation of information about atomic and small-scale behaviour...
                </p>
  </div>


  <div className="bg-blue-500 text-gray-800 shadow-md p-6 w-[328px] h-[320px] pl-9">

  <div className="w-[70px] h-[76px] rounded-lg bg-[#FFFFFF] mb-6"></div>
        <h5 className="font-bold text-base mb-2 text-white">training Courses</h5>

            <div className="w-[50px] h-[2px] bg-[#FFFFFF] mt-5"></div>

                <p className="text-[#FFFFFF] font-bold mt-6">
                    The gradual accumulation of information about atomic and small-scale behaviour...
                </p>
  </div>

</section>
    </div>
  )
}

export default Cards
