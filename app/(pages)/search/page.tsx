/* eslint-disable @next/next/no-img-element */
import { Section1 } from "@/app/components/section1/Section1";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import Link from "next/link";
import { ResultSearch } from "./ResultSearch";

export const metadata: Metadata = {
  title: "Kết quả tìm kiếm",
  description: "Mô tả trang kết quả tìm kiếm...",
}

export default function SearchPage() {
  return (
    <>
      {/* Section 1 */}
      <Section1 />
      {/* End Section 1 */}

      {/* Kết quả tìm kiếm */}
      <ResultSearch />
      {/* Hết Kết quả tìm kiếm */}
    </>
  )
}