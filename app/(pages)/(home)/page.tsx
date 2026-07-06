
import { Section1 } from "@/app/components/section1/Section1";
import { Metadata } from "next";
import { Section2 } from "./section2";


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
      <Section2/>
      {/* <!-- end Section-2  --> */}
    </>
  );
}
