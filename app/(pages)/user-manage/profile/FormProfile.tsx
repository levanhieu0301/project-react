/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { AuthenToken } from "@/hooks/useAuthen"
import JustValidate from "just-validate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// Import React FilePond
import { FilePond,registerPlugin } from 'react-filepond'
// Import FilePond styles
import 'filepond/dist/filepond.min.css'
// Import the plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// Import the plugin code
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { sources } from "next/dist/compiled/webpack/webpack";
// Register the plugin
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

export const FormProfile = () => {
  const {infoUser} = AuthenToken();
  const [avatars, setAvatars] = useState<any>([])

  useEffect(() => {
    if(infoUser){
      // if(infoUser.avatar){
      //   setAvatars([
      //     {
      //        source: infoUser.avatar
      //     },
      //   ])
      // }
      if(infoUser.avatar) {
        setAvatars([
          {
            source: infoUser.avatar
          }
        ]);
      }

       const validator = new JustValidate("#formProfileUser");

      validator
        .addField('#fullName', [
          {
            rule: 'required',
            errorMessage: 'Vui lòng nhập họ tên!'
          },
          {
            rule: 'minLength',
            value: 5,
            errorMessage: 'Họ tên phải có ít nhất 5 ký tự!',
          },
          {
            rule: 'maxLength',
            value: 50,
            errorMessage: 'Họ tên không được vượt quá 50 ký tự!',
          },
        ])
        .addField('#email', [
          {
            rule: 'required',
            errorMessage: 'Vui lòng nhập email của bạn!',
          },
          {
            rule: 'email',
            errorMessage: 'Email không đúng định dạng!',
          },
        ])
    }

  }, [infoUser]);

  const handleSubmit = (event: any) => {
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        let avatar = null
        if(avatars.length > 0){
          avatar = avatars[0].file
        }
        console.log(fullName)
        console.log(email)
        console.log(phone)
        console.log(avatar)
        const formData = new FormData();
        formData.append("fullName", fullName)
        formData.append("email", email)
        formData.append("phone", phone)
        formData.append("avatar", avatar)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
          method: "PATCH",
          body: formData,
          credentials: "include"
        })
          .then(res => res.json())
          .then(data => {
            
          })
  }

  return (
    <>
      {infoUser && (
        <form id="formProfileUser" onSubmit={handleSubmit} className="grid sm:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]">
          <div className="sm:col-span-2">
            <label htmlFor="fullName" className="block font-[500] text-[14px] text-black mb-[5px]">
              Họ tên *
            </label>
            <input 
              type="text" 
              name="fullName" 
              defaultValue={infoUser.fullName}
              id="fullName" 
              className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="avatar" className="block font-[500] text-[14px] text-black mb-[5px]">
              Avatar
            </label>
            <FilePond
              allowMultiple={false}
              allowRemove={true}
              name="avatar"
              labelIdle='+'
              acceptedFileTypes= {['image/*']}
              allowImagePreview={true}
              files={avatars} // giống như value và onChange của input
              // Sau khi người dùng chọn file image1 image2 thì state sẽ thành 
              // files = [
              //     FilePondFile1,
              //     FilePondFile2
              // ]và FilePond sẽ hiển thị đúng hai file đó
              onupdatefiles={setAvatars} // giống như value và onChange của input
              // Mỗi lần danh sách file thay đổi thì FilePond sẽ gọi hàm này.
            />
          </div>
          <div className="">
            <label htmlFor="email" className="block font-[500] text-[14px] text-black mb-[5px]">
              Email *
            </label>
            <input 
              type="email" 
              name="email" 
              defaultValue={infoUser.email}
              id="email" 
              className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
            />
          </div>
          <div className="">
            <label htmlFor="phone" className="block font-[500] text-[14px] text-black mb-[5px]">
              Số điện thoại
            </label>
            <input 
              type="text" 
              name="phone" 
              defaultValue={infoUser.phone}
              id="phone" 
              className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
            />
          </div>
          <div className="sm:col-span-2">
            <button className="bg-[#0088FF] rounded-[4px] h-[48px] px-[20px] font-[700] text-[16px] text-white">
              Cập nhật
            </button>
          </div>
        </form>
      )}
    </>
  )
}