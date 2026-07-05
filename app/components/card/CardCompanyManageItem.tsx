/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link"
import { FaBriefcase, FaLocationDot, FaUserTie } from "react-icons/fa6"
import { useEffect, useState } from "react"
import { workingFormList } from "@/config/workingForm"
import { ButtonDelete } from "../button/ButtonDelete"

export const CardCompanyManageItem = () => {
  const [totalPages, setTotalPages] = useState(0)
  const [infoWork, setInfoWork] = useState<any[]>([])
  const [page, setPage] = useState(1)
  useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/company-manage/job/list?page=${page}`, {
      method: "POST",
      credentials: "include", // Gửi kèm cookie
      })
      .then(res => res.json())
      .then(data => {
        if(data.code == "error") {
          setInfoWork([])
        }
        if(data.code == "success") {
          setInfoWork(data.infoWork)
          setTotalPages(data.totalPages)
        }
      })
  }, [page])

  const hanlePagination = (event: any) => {
    const value = event?.target.value
    setPage(parseInt(value))
  }
  const handleDeleteSuccess = (idJob: string) => {
    setInfoWork(pre => pre.filter(job => job.id !== idJob))
  }
  return (
    <>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
        {infoWork.map(item => {
          const workingForm = workingFormList.find(work => work.value === item.workingForm)?.label;
          return (
            <div 
              className="border border-[#DEDEDE] rounded-[8px] flex flex-col relative truncate"
              key={item.id}
              style={{
                background: "linear-gradient(180deg, #F6F6F6 2.38%, #FFFFFF 70.43%)"
              }}
            >
              <img 
                src="/assets/images/bg.svg" 
                alt="" 
                className="absolute top-[0px] left-[0px] w-[100%] h-auto" 
              />
              <div 
                className="relative mt-[20px] w-[116px] h-[116px] bg-white mx-auto rounded-[8px] p-[10px]" 
                style={{
                  boxShadow: "0px 4px 24px 0px #0000001F"
                }}
              >
                <img 
                  src={item.companyLogo}  
                  alt={item.title}
                  className="w-[100%] h-[100%] object-contain"
                />
              </div>
              <h3 className="mt-[20px] mx-[16px] font-[700] text-[18px] text-[#121212] text-center flex-1 whitespace-normal line-clamp-2">
                {item.title}
              </h3>
              <div className="mt-[6px] text-center font-[400] text-[14px] text-[#121212]">
                {item.companyName}
              </div>
              <div className="mt-[12px] text-center font-[600] text-[16px] text-[#0088FF]">
                {item.salaryMin}$ - {item.salaryMax}$
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaUserTie className="text-[16px]" /> {item.position}
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaBriefcase className="text-[16px]" />  {workingForm}
              </div>
              <div className="mt-[6px] flex justify-center items-center gap-[8px] font-[400] text-[14px] text-[#121212]">
                <FaLocationDot className="text-[16px]" /> {item.companyCity}
              </div>
              <div className="mt-[12px] mb-[20px] mx-[16px] flex flex-wrap justify-center gap-[8px]">
                {item.technologies.map((itemTech: string, itemIndex: string) => {
                  return (
                    <div key={itemIndex} className="border border-[#DEDEDE] rounded-[20px] py-[6px] px-[16px] font-[400] text-[12px] text-[#414042]">
                    {itemTech}
                  </div>
                  )
                })}
              </div>
              <div className="flex items-center justify-center gap-[12px] mb-[20px]">
                <Link href={`/company-manage/job/edit/${item.id}`} className="bg-[#FFB200] rounded-[4px] font-[400] text-[14px] text-black inline-block py-[8px] px-[20px]">
                  Sửa
                </Link>
                <ButtonDelete
                  api={`${process.env.NEXT_PUBLIC_API_URL}/company-manage/job/delete/${item.id}`}
                  id={item.id}
                  onDeleteSuccess={handleDeleteSuccess}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-[30px]">
        <select onChange = {hanlePagination} name="" className="border border-[#DEDEDE] rounded-[8px] py-[12px] px-[18px] font-[400] text-[16px] text-[#414042]">
          {/* {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Trang {i + 1}
            </option>
          ))} */}
          {Array(totalPages).fill("").map((item, index) => (
             <option key={index + 1} value={index + 1}>
              Trang {index + 1}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}