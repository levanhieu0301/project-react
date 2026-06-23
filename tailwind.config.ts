import type { Config } from "tailwindcss";
// Bình thường nó hiểu file html thôi, giờ muốn nó hiểu thêm file gì ở trong thư mục nào thì cấu hình vào
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1216px',
      '2xl': '1216px',
    },
  },
  plugins: [],
} satisfies Config;