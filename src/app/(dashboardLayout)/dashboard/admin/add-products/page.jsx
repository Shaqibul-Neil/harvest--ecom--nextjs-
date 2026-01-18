import AddProductForm from "@/components/form/admin/AddProductForm";
import MainHeadings from "@/components/shared/headings/MainHeadings";
import SubHeadings from "@/components/shared/headings/SubHeadings";
import React from "react";

export const metadata = {
  title: "Add Product | Harvest Admin",
  description: "Add a new product to the Harvest store",
};

const AddProducts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30 py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="mb-10 md:mb-14 space-y-4">
          <SubHeadings>Admin Panel</SubHeadings>
          <MainHeadings highlight={"Product"}>Add New</MainHeadings>

          <p className="text-slate-400 font-bold text-sm mt-2 max-w-xl">
            Fill in the details below to add a new product to your store.
            Required fields are marked with an asterisk (*).
          </p>
        </div>

        {/* Add Product Form */}
        <AddProductForm />
      </div>
    </div>
  );
};

export default AddProducts;
