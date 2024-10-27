import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="py-4 px-8 ">

      <div className="flex justify-between items-center">

        <div className="text-white font-bold text-2xl ml-48 mr-[-650px]">
          BrandName
        </div>

        <div className="flex space-x-6 text-white w-[43px] h-[24px] font-semibold">
          <Link href="#">Home</Link>
          <Link href="#">Product</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Contact</Link>
        </div>

        <div className="flex items-center space-x-4 mr-28">

          <Link href="/#" className="text-white text-md font-semibold mr-5">
            Login
          </Link>

          <Link href="/#">
            <button className="bg-blue-500 text-white px-6 py-4 rounded-md text-sm font-semibold">
              JOIN US
            </button>
          </Link>

        </div>

      </div>

    </nav>
  );
}
