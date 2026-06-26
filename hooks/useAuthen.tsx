/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const AuthenToken = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [infoUser, setInfoUser] = useState<any>(null);
  const pathname = usePathname()
  useEffect(()=> {
     fetch(`${process.env.NEXT_PUBLIC_API_URL}/authen/check`, {
      credentials: "include" // Giữ cookie
    })
    .then(res => res.json())
    .then((data)=> {
      if(data.code == "error"){
          setIsLogin(false);
      }
      if(data.code == "success"){
          setIsLogin(true);
          setInfoUser(data.infoUser);
      }
    })
  },[pathname])
 

  return {
    isLogin: isLogin,
    infoUser: infoUser
  }
}