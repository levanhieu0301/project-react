import Link from "next/link"


export const Section2 = () => {
  return (
    <>
      <div className="section-2 py-[60px]">
        <div className="container mx-auto px-[16px]">
          <h2
            className="text-center sm:text-[28px] text-[24px] font-[700] text-[#121212] mb-[30px]"
          >
            Nhà tuyển dụng hàng đầu
          </h2>
          {/* <!-- wrap  --> */}
          <div
            className="grid lg:grid-cols-3 grid-cols-2 sm:gap-[20px] gap-x-[10px] gap-y-[20px]"
          >
            {/* <!-- Item  --> */}
            <Link
              href="#"
              className="border border-[#DEDEDE] rounded-[8px] relative flex flex-col"
              style = {{
                background:" linear-gradient( 180deg, #f6f6f6 2.38%, #ffffff 70.43% )"
              }}
            >
              <img
                src="/assets/images/bg.svg"
                className="absolute top-[0] left-[0] w-[100%] h-auto"
              />
              <div
                className="bg-[#fff] relative rounded-[8px] sm:w-[160px] w-[125px] sm:h-[160px] h-[125px] mx-auto sm:mt-[32px] mt-[20px] p-[10px]"
                style = {{
                  boxShadow: "0px 4px 24px 0px #0000001f"
                }}
              >
                <img
                  src="/assets/images/demo.png"
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <h3
                className="sm:my-[24px] my-[16px] sm:mx-[16px] mx-[8px] font-[700] sm:text-[18px] text-[14px] text-center text-[#121212] flex-1 line-clamp-2"
              >
                LG Electronics Development Vietnam (LGEDV)
              </h3>
              <div
                className="bg-[#F7F7F7] flex items-center sm:justify-between justify-center sm:px-[16px] px-[12px] sm:py-[12px] py-[6px] flex-wrap gap-y-[12px]"
              >
                <div className="font-[400] sm:text-[14px] text-[12px] text-[#414042]">
                  Ho Chi Minh
                </div>
                <div
                  className="inline-flex items-center gap-x-[6px] font-[600] sm:text-[14px] text-[12px] text-[#121212] sm:w-[95px] w-[100%] sm:justify-between justify-center"
                >
                  <i className="fa-solid fa-user-tie text-[#000096] text-[16px]"></i>
                  5 việc làm
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}