import Link from 'next/link'

const Hero = () => {
  return (
    <div>
      <section className="text-center py-20 px-4">

            <h5 className="text-blue-400 text-base mb-2 font-bold">Welcome</h5>

                <h1 className="text-6xl md:text-5xl font-bold mb-4 pt-[35px] ">
                  <div className='mb-[-26px]'>Selling on the</div> <br /> internet like a pro
                    </h1>

                        <p className="text-white text-lg mb-8 mt-10">
                        We know how large objects will act, but things on a <br /> small scale just do not act that way.
                        </p>

                    <div className="flex justify-center space-x-4">

                            <Link href="/#" className="bg-[#23A6F0] text-white pt-[15px]
                            pb-[15px] pr-[40px] pl-[40px] rounded-md font-bold">
                            Get Quote Now
                            </Link>

                            <Link href="/#" className="border-2 border-blue-400 text-[#23A6F0]
                            pt-[15px] pb-[15px] pr-[40px] pl-[40px] rounded-[5px] font-bold gap-[10px]">
                            Learn More
                            </Link>
                            
                  </div>

      </section>

    </div>
  )
}

export default Hero
