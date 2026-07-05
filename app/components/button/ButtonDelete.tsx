import { Toaster, toast } from 'sonner'
export const ButtonDelete = (props: {
  api: string,
  id: string,
  onDeleteSuccess: (id: string) => void
} ) => {
  const { api, id, onDeleteSuccess } = props;
  const handleDelete = () => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa công việc này không?");
    if (confirmDelete) {
    fetch(api, {
      method: "DELETE",
      credentials: "include", // Gửi kèm cookie
    })
    .then(res => res.json())
    .then(data => {
      if(data.code === "success") {
        toast.success(data.message)
       // window.location.reload();// Bình thường, react sẽ không tự động reload trang
        onDeleteSuccess(id);
    }
    })
    }
  }
    return (
      <>
        <Toaster richColors position="top-right"/>
        <button onClick = {handleDelete} className="bg-[#FF0000] rounded-[4px] font-[400] text-[14px] text-white inline-block py-[8px] px-[20px]">
          Xóa
        </button>
      </>
    )
}