/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthenToken } from '@/hooks/useAuthen';
import { Editor } from '@tinymce/tinymce-react';
import {  useRef } from 'react';

export const TinyMCE = (props : {
  value?: string,
  id?: string
}) => {
  const {value = "", id = ""} = props;
  const editorRef = useRef<any>(null);
  return (
    <>
      <Editor
        apiKey='pxqgrr477akt31gv7edw1tomfifa3u703d2pnmvbbowfy9en'
        onInit={ (_evt, editor) => editorRef.current = editor }
        initialValue={value}
        init={{
          height: 500,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
        ],
        toolbar: `undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help`,
        images_upload_url: `${process.env.NEXT_PUBLIC_API_URL}/upload/image`
        }}
        id={id}
      />
    </>
  )

} 