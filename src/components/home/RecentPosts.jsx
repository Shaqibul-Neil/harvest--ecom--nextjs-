"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import SubHeadings from "../shared/headings/SubHeadings";
import MainHeadings from "../shared/headings/MainHeadings";
import PrimaryButton from "../shared/button/PrimaryButton";

import blog1 from "@/assets/blog1.webp";
import blog2 from "@/assets/blog2.webp";
import blog3 from "@/assets/blog3.webp";
import blog4 from "@/assets/blog4.webp";

const RecentPosts = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      category: "Organic Food",
      categoryColor: "bg-green-500",
      date: "Oct 12, 2026",
      title: "Secrets to Picking the Freshest Organic Fruits",
      excerpt:
        "Learn how to identify the best quality produce and why choosing organic matters for your health.",
    },
    {
      id: 2,
      image: blog2,
      category: "Cooking",
      categoryColor: "bg-amber-500",
      date: "Oct 08, 2026",
      title: "5 Quick & Healthy Breakfast Bowls With Harvest Greens",
      excerpt:
        "Start your day with energy using our premium greens in these delicious time-saving recipes.",
    },
    {
      id: 3,
      image: blog3,
      category: "Sustainability",
      categoryColor: "bg-teal-500",
      date: "Oct 05, 2026",
      title: "Exploring the Benefits of Farm-to-Table Shopping",
      excerpt:
        "Discover how local sourcing supports communities and ensures maximum nutritional value.",
    },
    {
      id: 4,
      image: blog4,
      category: "Eco Friendly",
      categoryColor: "bg-emerald-600",
      date: "Oct 01, 2026",
      title: "Sustainable Kitchen Habits: Reducing Food Waste Daily",
      excerpt:
        "Practical tips to make your kitchen eco-friendly while saving money on your monthly bills.",
    },
  ];

  return (
    <section className="space-y-16 overflow-x-clip">
      {/* Header */}
      <div className="lg:space-y-8 space-y-6">
        <SubHeadings>Tips & Tricks</SubHeadings>
        <div className="flex lg:justify-between lg:items-end lg:flex-row flex-col gap-6">
          <MainHeadings highlight="Posts">Our Recent </MainHeadings>
          <PrimaryButton>View All Posts</PrimaryButton>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ y: -5 }}
            className="flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden border border-slate-50 shadow-2xl shadow-slate-100 group transition-all duration-500"
          >
            {/* Image Side */}
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-1.5 ${blog.categoryColor} text-white text-[0.6rem] font-black uppercase tracking-widest rounded-full shadow-lg`}>
                  {blog.category}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 p-8 space-y-4 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-slate-400 text-[0.65rem] font-bold uppercase tracking-widest">
                <Calendar size={14} className="text-green-500" />
                {blog.date}
              </div>
              <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-green-700 transition-colors">
                {blog.title}
              </h3>
              <p className="text-slate-500 font-medium text-sm line-clamp-2">
                {blog.excerpt}
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-800 hover:text-green-600 transition-colors pt-2"
              >
                Continue Reading
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-2"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
