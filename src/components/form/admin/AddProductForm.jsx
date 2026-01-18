"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ImagePlus,
  Package,
  DollarSign,
  Leaf,
  Settings,
  Clock,
} from "lucide-react";

/* ============================================
   SECTION HEADER COMPONENT
============================================ */
const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-3 bg-green-50 rounded-2xl">
      <Icon size={20} className="text-green-600" />
    </div>
    <div>
      <h3 className="text-lg font-black text-slate-800 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-400 font-medium text-xs">{subtitle}</p>
    </div>
  </div>
);

/* ============================================
   FORM LABEL COMPONENT
============================================ */
const FormLabel = ({ children, required = false, hint = null }) => (
  <div className="space-y-1">
    <label className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-slate-400">
      {children}
      {required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
    {hint && <p className="text-[0.6rem] text-slate-400 font-medium">{hint}</p>}
  </div>
);

/* ============================================
   FORM INPUT WRAPPER
============================================ */
const FormItem = ({ children, className = "" }) => (
  <div className={`space-y-2 ${className}`}>{children}</div>
);

/* ============================================
   DIVIDER COMPONENT
============================================ */
const SectionDivider = () => (
  <div className="border-t border-slate-100 my-10" />
);

/* ============================================
   ADD PRODUCT FORM COMPONENT
============================================ */
const AddProductForm = () => {
  return (
    <div className="space-y-10 bg-white px-4 py-8 md:px-10 md:py-10 rounded-[2.5rem] border border-slate-50 shadow-2xl shadow-slate-100">
      {/* Form */}
      <form className="space-y-8">
        {/* ============================================
            SECTION 1: BASIC INFORMATION
        ============================================ */}
        <section>
          <SectionHeader
            icon={Package}
            title="Basic Information"
            subtitle="Enter the core product details"
          />

          <div className="space-y-6">
            {/* Row 1: Title */}
            <FormItem>
              <FormLabel required>Product Title</FormLabel>
              <Input
                type="text"
                placeholder="e.g., Fresh Organic Apple"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>

            {/* Row 2: Category, Unit */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormItem>
                <FormLabel required>Category</FormLabel>
                <Select>
                  <SelectTrigger
                    className="h-11 rounded-2xl border-slate-100 bg-slate-50/50"
                    size="default"
                  >
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fruits">Fruits</SelectItem>
                    <SelectItem value="vegetables">Vegetables</SelectItem>
                    <SelectItem value="snacks">Snacks</SelectItem>
                    <SelectItem value="condiments">Condiments</SelectItem>
                    <SelectItem value="dairy">Dairy</SelectItem>
                    <SelectItem value="beverages">Beverages</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>

              <FormItem>
                <FormLabel required>Unit</FormLabel>
                <Input
                  type="text"
                  placeholder="e.g., 1 kg, 500g, 1 pc"
                  className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                />
              </FormItem>
              {/* Row 3: Tags */}
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <Input
                  type="text"
                  placeholder="e.g., organic, fresh, seasonal"
                  className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                />
              </FormItem>
            </div>

            {/* Row 4: Featured Checkbox */}
            <div className="flex items-center gap-3 pt-2">
              <Checkbox
                id="isFeatured"
                className="h-5 w-5 rounded-lg border-slate-200 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
              />
              <label
                htmlFor="isFeatured"
                className="text-sm font-bold text-slate-600 cursor-pointer"
              >
                Mark as Featured Product
              </label>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ============================================
            SECTION 2: PRICING
        ============================================ */}
        <section>
          <SectionHeader
            icon={DollarSign}
            title="Pricing"
            subtitle="Set product price and discount"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormItem>
              <FormLabel required>MRP (Price)</FormLabel>
              <Input
                type="number"
                placeholder="0.00"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>

            <FormItem>
              <FormLabel>Discount</FormLabel>
              <Input
                type="number"
                placeholder="0"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>

            <FormItem>
              <FormLabel>Discount Type</FormLabel>
              <Select>
                <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50/50">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PERCENT">Percentage (%)</SelectItem>
                  <SelectItem value="CASH">Fixed Amount ($)</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          </div>
        </section>

        <SectionDivider />

        {/* ============================================
            SECTION 3: STOCK & INVENTORY
        ============================================ */}
        <section>
          <SectionHeader
            icon={Package}
            title="Stock & Inventory"
            subtitle="Manage product availability"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormItem>
              <FormLabel required>Stock Quantity</FormLabel>
              <Input
                type="number"
                placeholder="e.g., 100"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>

            <FormItem>
              <FormLabel>Stock Status</FormLabel>
              <Select>
                <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50/50">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IN_STOCK">In Stock</SelectItem>
                  <SelectItem value="OUT_OF_STOCK">Out of Stock</SelectItem>
                  <SelectItem value="LOW_STOCK">Low Stock</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          </div>
        </section>

        <SectionDivider />

        {/* ============================================
            SECTION 4: IMAGES
        ============================================ */}
        <section>
          <SectionHeader
            icon={ImagePlus}
            title="Product Images"
            subtitle="Add high-quality product photos"
          />

          <div className="space-y-6">
            <FormItem>
              <FormLabel
                required
                hint="This will be the product's main display image"
              >
                Main Image URL
              </FormLabel>
              <Input
                type="url"
                placeholder="https://example.com/image.jpg"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>

            <FormItem>
              <FormLabel hint="Add more images from different angles (comma-separated URLs)">
                Additional Images
              </FormLabel>
              <Textarea
                placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                className="min-h-24 rounded-2xl border-slate-100 bg-slate-50/50 resize-none"
              />
            </FormItem>
          </div>
        </section>

        <SectionDivider />

        {/* ============================================
            SECTION 5: DESCRIPTIONS
        ============================================ */}
        <section>
          <SectionHeader
            icon={Package}
            title="Product Description"
            subtitle="Describe your product in detail"
          />

          <div className="space-y-6">
            <FormItem>
              <FormLabel required>Short Description</FormLabel>
              <Textarea
                placeholder="A brief, catchy description for product cards..."
                className="min-h-24 rounded-2xl border-slate-100 bg-slate-50/50 resize-none"
              />
            </FormItem>

            <FormItem>
              <FormLabel hint="Separate paragraphs with a blank line">
                Long Description
              </FormLabel>
              <Textarea
                placeholder="Write detailed product description here. Each paragraph will be displayed separately on the product page..."
                className="min-h-40 rounded-2xl border-slate-100 bg-slate-50/50 resize-none"
              />
            </FormItem>
          </div>
        </section>

        <SectionDivider />

        {/* ============================================
            SECTION 6: NUTRITION INFORMATION
        ============================================ */}
        <section>
          <SectionHeader
            icon={Leaf}
            title="Nutrition Information"
            subtitle="Optional nutritional values per serving"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <FormItem>
              <FormLabel>Calories</FormLabel>
              <Input
                type="text"
                placeholder="e.g., 52 kcal"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>

            <FormItem>
              <FormLabel>Carbohydrates</FormLabel>
              <Input
                type="text"
                placeholder="e.g., 14 g"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>

            <FormItem>
              <FormLabel>Fiber</FormLabel>
              <Input
                type="text"
                placeholder="e.g., 2.4 g"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>

            <FormItem>
              <FormLabel>Vitamin C</FormLabel>
              <Input
                type="text"
                placeholder="e.g., 4.6 mg"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>

            <FormItem>
              <FormLabel>Sugar</FormLabel>
              <Input
                type="text"
                placeholder="e.g., 10 g"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>
          </div>
        </section>

        <SectionDivider />

        {/* ============================================
            SECTION 7: SPECIFICATIONS
        ============================================ */}
        <section>
          <SectionHeader
            icon={Settings}
            title="Product Specifications"
            subtitle="Additional product details"
          />

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormItem>
                <FormLabel>Product Type</FormLabel>
                <Input
                  type="text"
                  placeholder="e.g., Fresh Fruit"
                  className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                />
              </FormItem>

              <FormItem>
                <FormLabel>Origin</FormLabel>
                <Input
                  type="text"
                  placeholder="e.g., USA, India"
                  className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                />
              </FormItem>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormItem>
                <FormLabel>Packaging</FormLabel>
                <Input
                  type="text"
                  placeholder="e.g., Food Grade Box"
                  className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                />
              </FormItem>

              <FormItem>
                <FormLabel>Shelf Life</FormLabel>
                <Input
                  type="text"
                  placeholder="e.g., 7-10 days"
                  className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
                />
              </FormItem>
            </div>

            <FormItem>
              <FormLabel>Storage Instructions</FormLabel>
              <Input
                type="text"
                placeholder="e.g., Keep refrigerated"
                className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
              />
            </FormItem>
          </div>
        </section>

        <SectionDivider />

        {/* ============================================
            SECTION 8: DEAL TIMER (OPTIONAL)
        ============================================ */}
        <section>
          <SectionHeader
            icon={Clock}
            title="Deal Timer"
            subtitle="Optional limited-time offer settings"
          />

          <FormItem className="max-w-md">
            <FormLabel hint="Leave empty if no deal timer needed">
              Deal End Date & Time
            </FormLabel>
            <Input
              type="datetime-local"
              className="h-14 rounded-2xl border-slate-100 bg-slate-50/50"
            />
          </FormItem>
        </section>

        <SectionDivider />

        {/* ============================================
            SUBMIT BUTTON
        ============================================ */}
        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            className="px-12 h-14 bg-slate-900 text-white hover:bg-green-600 transition-all shadow-xl shadow-slate-100 font-black uppercase tracking-widest text-xs"
          >
            Add Product
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
