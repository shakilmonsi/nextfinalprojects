import React, { Fragment } from "react";
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter, } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";


const Footer = () => {
  return (
    <footer className="w-full">
      <div className="py-10 mt-24 border-t border-separate">
        <div className="container">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Col 1 */}
            <div className="col space-y-3">
              <div>
                <img src="images/logo/logo.png" alt="" className="w-24" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero illo
                minima ullam architecto provident dolorem.
              </p>
              <div>
                <h2 className="text-primary font-bold text-lg pb-3">NEWSLETTER</h2>
                <div>
                  <form action="" className="flex border border-separate rounded-md ">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full py-2 pl-3 focus:outline-0 focus:ring-0 border-0"
                    />
                    <input
                      type="submit"
                      defaultValue="subscribe"
                      className="bg-accentOne text-white rounded-r-md px-3 py-2 cursor-pointer uppercase"
                    />
                  </form>
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="col grid gap-x-10 grid-cols-2">
              {/* Inner Col 1 */}
              <div className="space-y-3">
                <h2 className="text-primary font-bold text-lg pb-3">MY ACCOUNT</h2>
                <div className="flex flex-col space-y-3">
                  <a href="#" className="hover:text-accentOne">
                    {" "}
                    Orders{" "}
                  </a>
                  <a href="#" className="hover:text-accentOne">
                    {" "}
                    Wishlist{" "}
                  </a>
                  <a href="#" className="hover:text-accentOne">
                    {" "}
                    Track Order{" "}
                  </a>
                  <a href="#" className="hover:text-accentOne">
                    {" "}
                    Manage Account{" "}
                  </a>
                  <a href="#" className="hover:text-accentOne">
                    {" "}
                    Return Order{" "}
                  </a>
                </div>
              </div>
              {/* Inner Col 2 */}
              <div className="space-y-3">
                <h2 className="text-primary font-bold text-lg pb-3 uppercase">
                  Information
                </h2>
                <div className="flex flex-col space-y-3">
                  <a href="#" className="hover:text-accentOne">
                    {" "}
                    About Us{" "}
                  </a>
                  <a href="#" className="hover:text-accentOne">
                    {" "}
                    Return Policy{" "}
                  </a>
                  <a href="#" className="hover:text-accentOne">
                    {" "}
                    Terms &amp; Condition{" "}
                  </a>
                  <a href="#" className="hover:text-accentOne">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                  <a href="#" className="hover:text-accentOne">
                    {" "}
                    FAQ{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* Col 3 */}
            <div className="space-y-3">
              <h2 className="text-primary font-bold text-lg pb-3 uppercase">contact</h2>
              <div className="flex flex-col space-y-3">
                <div className="flex">
                  <span>
                    <FaLocationDot className="mr-3 text-['16px']" />
                  </span>
                  <p>6795 Unknown City, NM 14300, United States Of America</p>
                </div>
                <div className="flex">
                  <span>
                    <FaPhone className="mr-3 text-['16px']" />
                  </span>
                  <p>+880119559275</p>
                </div>
                <div className="flex">
                  <span>
                    <GrMail className="mr-3 text-['16px']" />
                  </span>
                  <p>samdshakilofficial@gmail.com</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/Shakil.Monsi.420"
                  className="w-8 h-8 p-2 rounded-full  flex items-center justify-center bg-accentOne"
                >
                  <FaFacebookF className="text-gray-900 text-['14px']" />
                </a>
                <a
                  href="https://x.com/SAMDSHAKILOffi1?t=XwsAaoMUs-okTcLYY4b-Dg&s=09"
                  className="w-8 h-8 p-2 rounded-full  flex items-center justify-center bg-accentOne"
                >
                  <FaTwitter className="text-gray-900 text-['14px']" />
                </a>
                <a
                  href="https://instagram.com/sashakilmunsi?igshid=MWlmdDV3bDg1cHpzcA=="
                  className="w-8 h-8 p-2 rounded-full  flex items-center justify-center bg-accentOne"
                >
                  <FaInstagram className="text-gray-900 text-['14px']" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-center">Copyright ©2023 |&| MD. SHKIL MIA</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;