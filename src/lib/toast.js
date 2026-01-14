import toast from "react-hot-toast";

export const toastify = (promise, message) => {
  toast.promise(promise, message);
};
export const handleApiError = async (res) => {
  //console.log("API response:", res);
  if (res?.success === false) {
    //console.error("API error:", res.message);
    throw new Error(res.message);
  }
  return res;
};
