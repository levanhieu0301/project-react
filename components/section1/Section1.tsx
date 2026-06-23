import Link from "next/link"

import { FaMagnifyingGlass } from "react-icons/fa6";

export const Section1 = () => {
  return (
    <>
    <div className="section-1 bg-[#000065] py-[60px]">
      <div className="container mx-auto px-[16px]">
        <div className="wrap">
          <h1
            className="inner-title text-[#ffff] font-[700] text-[28px] text-center mb-[30px]"
          >
            887 Việc làm IT cho Developer &quot;Chất&quot;
          </h1>
          <form
            className="inner-buttons flex flex-wrap gap-x-[15px] gap-y-[12px] mb-[30px] items-center justify-center"
          >
            <div
              className="inner-select bg-[#ffff] rounded-[4px] w-[240px] h-[56px]"
            >
              <select
                name=""
                id=""
                className="px-[20px] [16px] border-none gap-[142px] md:w-[240px] h-[56px] font-[500] text-[16px] rounded-[4px] w-[100%]"
              >
                <option value="">Hà Nội</option>
                <option value="">Hồ Chí Minh</option>
                <option value="">Đà Nẵng</option>
              </select>
            </div>
            <div
              className="inner-input flex-1 bg-[#ffff] rounded-[4px] w-[240px] h-[56px]"
            >
              <input
                type="text"
                placeholder="Nhập từ khoá..."
                className="flex-1 bg-[#ffff] rounded-[4px] w-[240px] h-[56px] px-[12px]"
              />
            </div>
            <div>
              <button
                className="button bg-[#0088FF] md:w-[240px] w-[100%] h-[56px] rounded-[4px] text-[#fff] flex items-center justify-center gap-[10px] font-[500] text-[16px]"
              >
                <FaMagnifyingGlass className=" text-[20px]" /> Tìm
                Kiếm
              </button>
            </div>
          </form>
          <div className="request-search flex items-center flex-wrap gap-x-[12px]">
            <p className="font-[500] text-[16px] text-[#DEDEDE]">
              Mọi người đang tìm kiếm:
            </p>
            <div className="gap-[10px] flex flex-wrap items-center justify-center">
              <Link
                href="#"
                className="border bg-[#121212] hover:bg-[#414042] border-[#414042] rounded-[20px] text-[#fff] inline-block py-[8px] px-[20px]"
                >ReactJS</Link>
              <Link
                href="#"
                className="border bg-[#121212] hover:bg-[#414042] border-[#414042] rounded-[20px] text-[#fff] inline-block py-[8px] px-[20px]"
                >Javascript</Link>
              <Link
                href="#"
                className="border bg-[#121212] hover:bg-[#414042] border-[#414042] rounded-[20px] text-[#fff] inline-block py-[8px] px-[20px]"
                >NodeJS</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}