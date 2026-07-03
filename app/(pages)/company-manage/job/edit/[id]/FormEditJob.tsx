/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import JustValidate from "just-validate";
import { useEffect, useState, useRef } from "react";
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { Editor } from '@tinymce/tinymce-react';
import { Toaster, toast } from 'sonner'
import { workingFormList } from "@/config/workingForm";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

export const FormEditJob = (props: { id: string }) => {
  const { id } = props;
  const [images, setImages] = useState<any>([])
  const editorRef = useRef<any>(null);
  const [isValid, setIsValid] = useState(false)
  const [dataJob, setDataJob] = useState<any>(null)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company-manage/job/edit/${id}`, {
      method: "GET",
      credentials: "include", // Gửi kèm cookie
    })
    .then(res => res.json())
    .then(data => {
      if(data.code == "error") {
        toast.error(data.message)
      }
      if(data.code == "success") {
        setDataJob(data.jobs)
      }
    })
  }, [])
  
  
  useEffect(() => {
   if(dataJob){
    if(dataJob.images && dataJob.images.length > 0){
      const listImages = dataJob.images.map((image: string) => {
        return {
          source: image,
        }
      })
      setImages(listImages)
    }
     const validator = new JustValidate("#formEditJob");

    validator
      .addField('#title', [
        {
          rule: 'required',
          errorMessage: 'Vui lòng nhập tên công việc!'
        },
      ])
      .addField('#salaryMin', [
        {
          rule: 'minNumber',
          value: 0,
          errorMessage: 'Vui lòng nhập mức lương >= 0'
        },
      ])
      .addField('#salaryMax', [
        {
          rule: 'minNumber',
          value: 0,
          errorMessage: 'Vui lòng nhập mức lương >= 0'
        },
      ])
      .onFail(() => {
        setIsValid(false)
      })
      .onSuccess(() => {
        setIsValid(true)
      });
   }
  }, [dataJob]);

  const handleSubmit = (event: any) => {
    if(isValid){
    const title = event.target.title.value;
    const salaryMin = event.target.salaryMin.value;
    const salaryMax = event.target.salaryMax.value;
    const position = event.target.position.value;
    const workingForm = event.target.workingForm.value;
    const technologies = event.target.technologies.value;
    let description = "";
      if (editorRef.current) {
        description = (editorRef.current as any).getContent();
      }
    // Tạo FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("salaryMin", salaryMin);
    formData.append("salaryMax", salaryMax);
    formData.append("position", position);
    formData.append("workingForm", workingForm);
    formData.append("technologies", technologies);
    formData.append("description", description);
    // Xử lý hình ảnh 
    if(images.length > 0){
      for(const image of images){
        formData.append("images", image.file)
      }
    }

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/company-manage/job/edit/${id}`, {
        method: "PATCH",
        body: formData,
        credentials: "include", // Gửi kèm cookie
      })
      .then(res => res.json())
      .then(data => {
        if(data.code == "error") {
           toast.error(data.message)
        }
        if(data.code == "success") {
          toast.success(data.message)
        }
      })
    }
  }
  return (
    <>
      <Toaster richColors position="top-right"/>
      {dataJob && (      
      <form action="" id="formEditJob" onSubmit={handleSubmit} className="grid sm:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]">
        <div className="sm:col-span-2">
          <label htmlFor="title" className="block font-[500] text-[14px] text-black mb-[5px]">
            Tên công việc *
          </label>
          <input 
            type="text" 
            name="title" 
            defaultValue={dataJob?.title}
            id="title" 
            className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="salaryMin" className="block font-[500] text-[14px] text-black mb-[5px]">
            Mức lương tối thiểu ($)
          </label>
          <input 
            type="number" 
            name="salaryMin" 
            defaultValue={dataJob?.salaryMin}
            id="salaryMin" 
            className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="salaryMax" className="block font-[500] text-[14px] text-black mb-[5px]">
            Mức lương tối đa ($)
          </label>
          <input 
            type="number" 
            name="salaryMax" 
            defaultValue={dataJob?.salaryMax}
            id="salaryMax" 
            className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="position" className="block font-[500] text-[14px] text-black mb-[5px]">
            Cấp bậc *
          </label>
          <select 
            name="position" 
            defaultValue={dataJob?.position}
            id="position" 
            className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
          >
            <option value="Intern">Intern</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior">Junior</option>
            <option value="Middle">Middle</option>
            <option value="Senior">Senior</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
        <div className="">
          <label htmlFor="workingForm" className="block font-[500] text-[14px] text-black mb-[5px]">
            Hình thức làm việc *
          </label>
          <select 
            name="workingForm" 
            defaultValue={dataJob?.workingForm}
            id="workingForm" 
            className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
          >
            {workingFormList.map((item, index) => (
              <option  key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="technologies" className="block font-[500] text-[14px] text-black mb-[5px]">
            Các công nghệ
          </label>
          <input 
            type="text" 
            name="technologies" 
            defaultValue={dataJob?.technologies?.join(", ")}
            id="technologies" 
            className="w-[100%] h-[46px] border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="images" className="block font-[500] text-[14px] text-black mb-[5px]">
            Danh sách ảnh *
          </label>
          <FilePond
            allowMultiple={true}
            maxFiles={8}
            name="images"
            labelIdle='+'
            acceptedFileTypes={['image/*']}
            allowImagePreview={true}
            files={images}
            onupdatefiles={setImages}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="block font-[500] text-[14px] text-black mb-[5px]">
            Mô tả chi tiết
          </label>
          <Editor
            apiKey='pxqgrr477akt31gv7edw1tomfifa3u703d2pnmvbbowfy9en'
            onInit={ (_evt, editor) => editorRef.current = editor }
            initialValue={dataJob?.description}
            init={{
              height: 500,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: `undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help`,
            images_upload_url: `${process.env.NEXT_PUBLIC_API_URL}/upload/image`
            }}
            id = "description"
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