import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Footer = () => {
  const perent = new Date().getFullYear().toLocaleString().replace(',' , '')
  return (
    <div className="bg-gray-300">
      <Container className={`flex md:flex-row flex-col py-4`}>
        <div className="md:w-[60%] text-center lg:text-start">
          <Link href="/" className="flex justify-center lg:justify-start">
            <div className="flex items-center">
              <span className="text-pink-500 font-bold text-4xl">
                E-Store <b className="text-black ">.</b>
              </span>
            </div>
          </Link>
          <p className="mt-4 sm:text-2xl leading-relaxed">
            Discover the latest device's With Our E-Store 
          </p>
          <p className="mt-4 mb-4 sm:text-2xl leading-relaxed">
            Exclusive deals just for you!
          </p>
          <Link href={"/store"} className="text-[#ec4899] py-3 px-6 text-xl border-none rounded-lg cursor-pointer bg-[#f2f2f2] font-medium">
            Store
          </Link>
        </div>
        <div className="md:w-[40%] mt-6 md:mt-0 flex lg:flex-row flex-col lg:justify-between justify-center">
        <div className="text-center lg:text-start">
          <h3 className="text-xl font-semibold">Navigation</h3>
          <div className="mt-6 flex flex-col gap-4">
          <Link href="/" className="text-lg font-medium hover:text-blue-700">Home</Link>
          <Link href="/store" className="text-lg font-medium hover:text-blue-700">Store</Link>
          </div>
        </div>
        <div className="mt-6 lg:mt-0 text-center lg:text-start">
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <div className={`flex items-center mt-4 justify-center lg:justify-start`}>
          <div className="bg-white rounded-3xl px-3 py-2">
          <input
            type="email"
            placeholder="Enter your Email"
            className="outline-none "
          />
          <button>
            <FaSearch size={22} />
          </button>
          </div>
        </div>
        <button type="submit" className="mt-5 px-4 py-2 bg-pink-500 hover:bg-pink-700 text-white font-semibold text-xl rounded-xl">
          Submit
        </button>
        </div>
        </div>
      </Container>
      <div className="bg-amber-200 text-center py-2 text-2xl font-medium">
        @{perent}
      </div>
    </div>
  );
};

export default Footer;
