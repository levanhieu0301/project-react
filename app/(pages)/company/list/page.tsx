
import { Metadata } from "next"
import { CompanyDetail } from "./CompanyDetail"

export const metadata: Metadata = {
  title: "Danh sách công ty",
  description: "Mô tả trang danh sách công ty...",
}

export default function CompanyListPage() {
  return (
    <>
      {/* Section 2 */}
      <div className="py-[60px]">
        <div className="container mx-auto px-[16px]">
          <h2 className="font-[700] sm:text-[28px] text-[24px] text-[#121212] text-center mb-[30px]">
            Danh sách công ty
          </h2>
          <CompanyDetail/>
        </div>
      </div>
      {/* End Section 2 */}
    </>
  )
}