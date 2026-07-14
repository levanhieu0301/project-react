/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next"
import Link from "next/link"
import { headers } from "next/headers"
import { FaBriefcase, FaCircleCheck, FaEnvelope, FaEye, FaPhone, FaUserTie } from "react-icons/fa6"
import { workingFormList } from "@/config/workingForm"

export const metadata: Metadata = {
  title: "Chi tiết CV",
  description: "Chi tiết CV...",
}

export default async function CompanyManageCVListPage( {params} : {
  params: {
    id: string
  }
}) {
  const { id } = await params;
  const headerList = await headers();
  const cookie = headerList.get("cookie") 
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/company-manage/cv/detail/${id}`, {
    method: "GET",
    headers: {
      cookie: cookie || ""
    },
    cache: "no-store"
  });
  const data = await res.json();

  let infoCV: any = null;
  let infoJob: any = null;
  if(data.code == "success") {
    infoCV = data.infoCV;
    infoJob = data.infoJob;
    infoJob.workingForm = workingFormList.find(item => item.value == infoJob.workingForm)?.label;
  }

  return (
    <>
      <div className="py-[60px]">
        <div className="container mx-auto px-[16px]">
          {infoCV && (
            <div className="border border-[#DEDEDE] rounded-[8px] p-[20px]">
              <div className="flex flex-wrap gap-[20px] items-center justify-between mb-[20px]">
                <h2 className="sm:w-auto w-[100%] font-[700] text-[20px] text-black">
                  Thông tin CV
                </h2>
                <a href={`/company-manage/cv/list`} className="font-[400] text-[14px] text-[#0088FF] underline">
                  Quay lại danh sách
                </a>
              </div>
              
              <div className="font-[400] text-[16px] text-black mb-[10px]">
                Họ tên:
                <span className="font-[700]">
                  {infoCV.fullName}
                </span>
              </div>
              <div className="font-[400] text-[16px] text-black mb-[10px]">
                Email:
                <span className="font-[700]">
                  {infoCV.email}
                </span>
              </div>
              <div className="font-[400] text-[16px] text-black mb-[10px]">
                Số điện thoại:
                <span className="font-[700]">
                  {infoCV.phone}
                </span>
              </div>
              <div className="font-[400] text-[16px] text-black mb-[10px]">
                File CV:
              </div>
              <div className="bg-[#D9D9D9] h-[900px] ">
                <iframe
                  src={infoCV.fileCV}
                  className="w-full h-full"
                >
                </iframe>
              </div>
            </div>
          )}
          {/* <!-- Hết Thông tin CV -->
          <!-- Thông tin công việc --> */}
          {infoJob && (
          <div className="border border-[#DEDEDE] rounded-[8px] p-[20px] mt-[20px]">
            <h2 className="sm:w-auto w-[100%] font-[700] text-[20px] text-black mb-[20px]">
              Thông tin công việc
            </h2>

            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Tên công việc:
              <span className="font-[700]">
                {infoJob.title}
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Mức lương:
              <span className="font-[700]">
                {infoJob.salaryMin.toLocaleString("vi-VN")}$ - {infoJob.salaryMax.toLocaleString("vi-VN")}$
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Cấp bậc:
              <span className="font-[700]">
                {infoJob.position}
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Hình thức làm việc:
              <span className="font-[700]">
                {infoJob.workingForm}
              </span>
            </div>
            <div className="font-[400] text-[16px] text-black mb-[10px]">
              Công nghệ:
              <span className="font-[700]">
                {infoJob.technologies.join(", ")}
              </span>
            </div>
            <a href={`/company-manage/job/edit/${infoJob.id}`} className="font-[400] text-[14px] text-[#0088FF] underline">
              Xem chi tiết công việc
            </a>
          </div>
          )}
          {/* <!-- Hết Thông tin công việc --> */}
        </div>
      </div>
      {/* <!-- Hết Chi tiết CV --> */}

    </>
  )
}
