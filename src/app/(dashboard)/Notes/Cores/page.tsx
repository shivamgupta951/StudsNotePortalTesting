'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  const navigate = useRouter();
  const handleSubsNavigate = (item:String|null) =>{
    navigate.push(`/Notes/Cores/${item}`);
  }
  const subs = ["sub1","sub2","sub3","sub4","sub5","sub6","sub7"];
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='rounded-2xl bg-gray-900 border p-2 px-6'>
        <div className='text-5xl font-bold bg-linear-to-r from-orange-600 via-purple-500 to-red-600 bg-clip-text text-transparent relative border-b-4 border-white flex'>Your Subjects <div className='absolute -top-15 bg-yellow-800 px-5 p-2 rounded-2xl border text-2xl text-green-200 mx-5 -right-10'>Add+</div></div>
        <div className='h-80 flex justify-start flex-col items-center border my-2 rounded-4xl bg-gray-950/50 overflow-y-auto p-4 py-8'>
          {subs.length==0?"No Subjects Added!": <div className='w-full'>
            {
              subs.map((item,key)=>{
                return <div className='border hover:scale-105 bg-gray-950 w-full flex justify-between' key={key}>
                  <div className='text-2xl p-3 tracking-widest'>{item}</div>
                  <div className='text-xl p-3 tracking-widest underline cursor-pointer hover:scale-90' onClick={()=>handleSubsNavigate(item)}>view</div>
                </div>
              })
            }
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default page
