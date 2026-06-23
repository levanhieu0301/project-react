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
              className="inline-flex items-center gap-x-[5px] text-[#ffff] font-[600] text-[16px]"
            >
              <Link href="#" className="">Đăng Nhập</Link>
              <span className="">/</span>
              <Link href="#" className="">Đăng Ký</Link>
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