import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const toastify = (promise, message) => {
  toast.promise(promise, message);
};

export const handleApiError = async (res) => {
  if (res?.success === false) {
    throw new Error(res.message);
  }
  return res;
};

/* -------- SWEETALERT2 CUSTOMIZATION (Harvest Theme) -------- */

// Base theme matching Harvest's green organic theme
const harvestTheme = {
  background: "#ffffff",
  color: "#1e293b", // slate-800
  confirmButtonColor: "#16a34a", // green-600
  cancelButtonColor: "#64748b", // slate-500
  iconColor: "#16a34a", // green-600
};

// Login Required Alert
export const showLoginRequiredAlert = () => {
  return Swal.fire({
    title: "Login Required",
    text: "Please login to add items to your cart",
    icon: "info",
    iconColor: "#16a34a",
    showCancelButton: true,
    confirmButtonText: "Login Now",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#16a34a",
    cancelButtonColor: "#64748b",
    background: "#ffffff",
    color: "#1e293b",
    borderRadius: "1.5rem",
    customClass: {
      popup: "rounded-3xl shadow-2xl border border-green-100",
      title: "text-slate-800 font-bold",
      htmlContainer: "text-slate-600",
      confirmButton:
        "rounded-xl px-6 py-3 font-bold tracking-wide hover:bg-green-700 transition-all",
      cancelButton:
        "rounded-xl px-6 py-3 font-bold tracking-wide hover:bg-slate-600 transition-all",
    },
  });
};

// Success Alert
export const showSuccessAlert = (title, text) => {
  return Swal.fire({
    title: title || "Success!",
    text: text || "",
    icon: "success",
    iconColor: "#16a34a",
    confirmButtonColor: "#16a34a",
    background: "#ffffff",
    color: "#1e293b",
    timer: 2000,
    timerProgressBar: true,
    customClass: {
      popup: "rounded-3xl shadow-2xl border border-green-100",
      title: "text-slate-800 font-bold",
      confirmButton: "rounded-xl px-6 py-3 font-bold",
    },
  });
};

// Error Alert
export const showErrorAlert = (title, text) => {
  return Swal.fire({
    title: title || "Error!",
    text: text || "Something went wrong",
    icon: "error",
    iconColor: "#ef4444",
    confirmButtonColor: "#16a34a",
    background: "#ffffff",
    color: "#1e293b",
    customClass: {
      popup: "rounded-3xl shadow-2xl border border-red-100",
      title: "text-slate-800 font-bold",
      confirmButton: "rounded-xl px-6 py-3 font-bold",
    },
  });
};

// Confirmation Alert
export const showConfirmAlert = (title, text, confirmText = "Yes") => {
  return Swal.fire({
    title: title || "Are you sure?",
    text: text || "",
    icon: "question",
    iconColor: "#16a34a",
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: "Cancel",
    confirmButtonColor: "#16a34a",
    cancelButtonColor: "#64748b",
    background: "#ffffff",
    color: "#1e293b",
    customClass: {
      popup: "rounded-3xl shadow-2xl border border-green-100",
      title: "text-slate-800 font-bold",
      confirmButton: "rounded-xl px-6 py-3 font-bold",
      cancelButton: "rounded-xl px-6 py-3 font-bold",
    },
  });
};
