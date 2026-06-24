
import { CardCompanyItem } from "@/components/card/CardCompanyItem";
import { Section1 } from "@/components/section1/Section1";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Việc làm IT cho Developer",
};

export default function Home() {
  return (
    <>
      {/* <!-- Section-1  --> */}
      <Section1/>
      {/* <!-- End Section-1  --> */}

      {/* <!-- Section-2  --> */}
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
            <CardCompanyItem/>
            {/* <!-- End Item  --> */}
          </div>
        </div>
      </div>
      {/* <!-- end Section-2  --> */}
    </>
  );
}
