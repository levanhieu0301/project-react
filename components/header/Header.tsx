"use client"
import Link from "next/link"
import { useState } from "react";
import { FaChevronDown,FaBars, FaChevronRight   } from "react-icons/fa";
import { HeaderMenu } from "./HeaderMenu";


export const Header= () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  console.log(showMenu)
  return (
    <>
      <header className="header bg-[#000071] py-[15px]">
        <div className="container mx-auto px-[16px]">
          <div className="wrap flex items-center justify-between">
            {/* <!-- Logo  --> */}
            <Link
              href="#"
              className="logo text-[#ffff] font-[800] text-[28px] flex-1 lg:flex-none"
              >28.ITJobs</Link>
            {/* <!-- Menu  --> */}
            <HeaderMenu showMenu={showMenu} />
            {/* <!-- Account --> */}
            <div
              className="inline-flex items-center gap-x-[5px] text-[#ffff] font-[600] text-[16px] relative group/sub-1"
            >
              {/* Chưa đăng nhập  */}
              <Link href="/user/login" className="">Đăng Nhập</Link>
              <span className="">/</span>
              <Link href="/user/register" className="">Đăng Ký</Link>
              {/* Đã đăng nhập  */}
              {/* <Link href="#" className="">LG ELect...</Link>
              <ul className="absolute top-[100%] right-[0px] w-[200px] bg-[#000065] hidden group-hover/sub-1:block">
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Thông tin công ty
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Quản lý công việc
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Quản lý CV
                  </Link>
                </li>
                <li className="py-[10px] px-[16px] rounded-[4px] flex items-center justify-between hover:bg-[#000096] relative group/sub-2">
                  <Link href="" className="text-white font-[600] text-[16px]">
                    Đăng xuất
                  </Link>
                </li>
              </ul> */}
            </div>
            <button onClick={handleShowMenu}
              className="text-[20px] text-[#ffff] ml-[12px] lg:hidden inline-flex"
            >
              <FaBars/>
            </button>
          </div>
        </div>
      </header>
    </>
  )

}