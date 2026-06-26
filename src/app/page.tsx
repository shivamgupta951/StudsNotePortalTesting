"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();
  const navNotes = () => {
    navigate.push("/Notes");
  };
  return (
    <div>
      <div className="flex flex-col flex-1 items-center justify-start pt-40 bg-zinc-50 font-sans bg-linear-to-b from-black via-black to-gray-900 min-h-230">
        <h1 className="text-7xl text-green-600/90 font-bold shadow-2xl shadow-amber-900 p-4 rounded-2xl">
          Welcome to Studs~NotePortal!
        </h1>
        <p className="w-[50%] text-3xl my-20 bg-linear-to-r from-red-600 via-orange-600 to-fuchsia-800 text-transparent bg-clip-text text-center ">
          A Great Platform to store the Notes , Syllabus and files in better
          format. All the things are managed on frontend render database and
          dynamic routes with routing concepts.
        </p>
        <div
          className="text-4xl bg-white text-black p-4 rounded-2xl px-20 cursor-pointer hover:scale-105 duration-500"
          onClick={navNotes}
        >
          Click here to proceed to Notes Section! ↪{" "}
        </div>
      </div>
      <div className="flex justify-center flex-col items-center bg-linear-to-br min-h-screen from-amber-100/70 via-amber-100/70 to-cyan-900 ">
      <div className="text-6xl outline-4 outline-amber-800 font-semibold tracking-wide shadow-black shadow-lg text-slate-950">Features</div>
        <div className="flex bg-black rounded-2xl">
          <div className="size-80 mx-2 border flex justify-center items-center bg-linear-to-r from-orange-500 via-green-600 to-red-800 bg-clip-text text-transparent text-center px-8">Supports Notes system for each and new subjects for customization!</div>
          <div className="text-center size-80 mx-2 border flex justify-center items-center bg-linear-to-r from-orange-500 via-green-600 to-red-800 bg-clip-text text-transparent px-8">Helps users to store syllabus , note & files with seperate folders!</div>
          <div className="text-center size-80 mx-2 border flex justify-center bg-linear-to-r from-orange-500 via-green-600 to-red-800 bg-clip-text text-transparent items-center px-8">Made with next js for better experience!</div>
        </div>
      </div>
    </div>
  );
}
