'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();
  const navNotes = ()=>{
    navigate.push("/Notes");
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-start pt-40 bg-zinc-50 font-sans bg-linear-to-b from-black via-black to-gray-900">
      <h1 className="text-7xl text-green-600/90 font-bold shadow-2xl shadow-amber-900 p-4 rounded-2xl">
        Welcome to Studs~NotePortal!
      </h1>
      <p className="w-[50%] text-3xl my-20 bg-linear-to-r from-red-600 via-orange-600 to-fuchsia-800 text-transparent bg-clip-text text-center ">
        A Great Platform to store the Notes , Syllabus and files in better
        format. All the things are managed on frontend render database and
        dynamic routes with routing concepts.
      </p>
      <div className="text-4xl bg-white text-black p-4 rounded-2xl px-20 cursor-pointer hover:scale-105 duration-500" onClick={navNotes}>
        Click here to proceed to Notes Section! ↪{" "}
      </div>
    </div>
  );
}
