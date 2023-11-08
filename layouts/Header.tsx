import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { useDispatch, useSelector } from "react-redux";
import { setCartList } from '@/lib/reduxStore/slices/storeSlice';


import { parseCookies, setCookie, destroyCookie } from "nookies";
import { baseUrl } from "@/config/appConfig";
import { FaBars, FaBed, FaCartPlus, FaRegHeart, FaUser, FaUtensils } from "react-icons/fa";
import { FaMattressPillow } from "react-icons/fa6";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { UserModel } from "@/models";
import UserProfileTop from "@/components/User/UserProfileTop";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profile_avatar: string;
  userRole: string;
};

const Header = () => {

  const cookies = parseCookies();
  const user = cookies?.user;
  const token = cookies?.token;

  const dispatch = useDispatch();
  const cartCount = useSelector((state: any) => state.utils.cartList.count);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<User>();

  const getUser = async (id: any) => {
    const getUser = await fetch(`/api/user/${id}`);
    const result = await getUser.json();
    if (result.status == true) {
      setUserInfo(result.user);
      setLoading(false);
    }
  };


  useEffect(() => {
    let cuser = cookies?.user;
    if (cuser) {
      let luser = JSON.parse(cuser);
      getUser(luser._id);
    } else {
      setLoading(false);
    }
  }, [cookies?.user]);

  useEffect(() => {
    setMounted(true);
    dispatch(setCartList());
  }, [])

  console.log('user info', userInfo);

  const renderThemeMode = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className="w-8 h-8  btn-primary  focus:outline-none flex items-center">
          <BsFillSunFill
            className="ml-1 w-6 h-6 text-yellow-400  dark:text-white"
            role="button"
            onClick={() => setTheme("light")}
          />
        </button>
      );
    } else {
      return (
        <button className="w-8 h-8  focus:outline-none flex items-center">
          <BsMoonStarsFill
            className="ml-1 w-6 h-6 text-gray-700 dark:text-white"
            role="button"
            onClick={() => setTheme("dark")}
          />
        </button>
      );
    }
  };

  return (
    <>
      {/* Start Header */}
      <header className="bg-gray-50 dark:bg-gray-600">
        <div className="container">
          <div className="row flex items-center justify-between py-3">
            {/* Col 1 */}
            <div>
              <Link href="/">
                <img
                  src={`${baseUrl}/img/logo/logo.png`}
                  alt="website-logo"
                  className="w-24"
                />
              </Link>
            </div>
            {/* Col 2 */}
            <div>
              <div className="flex border border-r-0 rounded-md border-accentOne">
                <img
                  src={`${baseUrl}/img/icon/search.svg`}
                  alt="search"
                  className="pl-3 pr-4"
                />
                <form>
                  <input
                    type="text"
                    placeholder="search"
                    className="py-2  focus:outline-0 focus:ring-0 border-0"
                  />
                  <input
                    type="submit"
                    defaultValue="Search"
                    className="bg-accentOne text-white rounded-r-md px-3 py-2 cursor-pointer"
                  />
                </form>
              </div>
            </div>
            {/* Col 3*/}
            <div className="flex space-x-3">
              <div className="relative flex flex-col items-center cursor-pointer">
                <Link href={`${baseUrl}/wishlist`}>
                  <FaRegHeart className="text-[24px] text-black dark:text-white" />
                  <span className="bg-accentOne h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-4">
                    8
                  </span>
                  <p className="text-black dark:text-white">WishList</p>
                </Link>
              </div>
              <div className="relative flex flex-col items-center cursor-pointer">
                <Link href={`${baseUrl}/cart`}>
                  <FaCartPlus className="text-[24px] text-black dark:text-white" />
                  <span className="bg-accentOne h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-4">
                    {cartCount}
                  </span>
                  <p className="text-black dark:text-white">Cart</p>
                </Link>
              </div>
              <div className="relative flex flex-col items-center cursor-pointer">
                {renderThemeMode()}
              </div>
              <div className=" flex flex-col items-center cursor-pointer">
                {/* {
                  userInfo == null ?
                    <Link href={`${baseUrl}/login`}>
                      <FaUser className="text-[24px] text-black dark:text-white" />
                      <p className="text-black dark:text-white">Account</p>
                    </Link> :
                    <Link href={`${baseUrl}/my-account`}>
                      <FaUser className="text-[24px] text-black dark:text-white" />
                      <p className="text-black dark:text-white">Account</p>
                    </Link>
                } */}

                <UserProfileTop />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header */}

      {/* Start Navbar */}
      <nav className="bg-primary text-white">
        <div className="container">
          <div className="row flex items-center space-x-5">
            {/* Col 1 */}
            <div className="relative group">
              <div className="bg-accentOne">
                <Link href="#" className="flex items-center bg-primary-600 space-x-2 px-5 py-3">
                  <span>
                    <i className="fa-solid fa-bars  text-white" />
                    <FaBars className="text-white" />
                  </span>
                  <span>All Categories</span>
                </Link>
              </div>
              {/* Dropdown Menu */}
              <div className=" text-orange-500	 absolute bg-white w-full shadow-md divide-y divide-dashed divide-separatorColor opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500">
                <Link href="#" className="flex items-center space-x-2 px-5 py-3">
                  <span>
                    <FaBed className="text-accentOne" />
                  </span>
                  <span>Bedroom</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2 px-5 py-3">
                  <span>
                    <FaMattressPillow className="text-accentOne" />
                  </span>
                  <span>Mattress</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2 px-5 py-3">
                  <span>
                    <FaUtensils className="text-accentOne" />
                  </span>
                  <span>Dinning</span>
                </Link>
              </div>
            </div>
            {/* Col 2 */}
            <div className="flex text-orange-500 justify-between flex-grow">
              <div className="space-x-5">
                <Link href={`${baseUrl}/`}>Home</Link>
                <Link href={`${baseUrl}/shop`}>Shop</Link>
                <Link href={`${baseUrl}/about-us`}>About Us</Link>
                <Link href={`${baseUrl}/contact-us`}>Contact Us</Link>
              </div>
              <div>
                {
                  userInfo ? <> {userInfo.firstName}</> : <Link href={`${baseUrl}/login`} className=" text-orange-500">Login/Register</Link>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
};

export default Header;
