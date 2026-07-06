/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from "react"
import { CardCompanyItem } from "../../components/card/CardCompanyItem"


export const Section2 = () => {
  const [companyList, setCompanyList] = useState<any[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company/list?limitItems=9`)
      .then(res => res.json())
      .then(data => {
        if(data.code == "success") {
          setCompanyList(data.companyList);
        }
      })
    }, []);

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
          {companyList.map((item) => (
            <CardCompanyItem key={item.id} item={item} />
          ))}
          {/* <!-- End Item  --> */}
        </div>
      </div>
    </div>
    </>
  )
}