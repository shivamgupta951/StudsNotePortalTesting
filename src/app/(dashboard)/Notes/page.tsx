"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const navigate = useRouter();
  return (
    <div className="text-white min-h-screen flex justify-center items-center">
      <div
        className="cursor-pointer hover:scale-105 hover:border-0 p-3 px-10 bg-gray-900 border"
        onClick={() => {
          navigate.push("/Notes/Cores");
        }}
      >
        Notes Section
      </div>
      <div
        className="cursor-pointer hover:scale-105 hover:border-0 p-3 px-8 bg-gray-900 border"
        onClick={() => {
          navigate.push("/Notes/Storage");
        }}
      >
        Storage Section
      </div>
    </div>
  );
};

export default page;
