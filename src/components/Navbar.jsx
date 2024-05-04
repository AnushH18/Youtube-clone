// import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { RiVideoAddFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";


export default function Navbar() {
  return (
    <div className = " h-16 px-14 flex items-center justify-between bg-[#000000]">
        <div className = "flex gap-8 items-center">
            <button className = ""> 
             <IoMdMenu  className = " text-3xl"/ >
             </button>
             <div className = "flex gap-4 mr-4"> 
               <FaYoutube  className = " text-red-600 text-3xl"/>
               <span className = " text-2xl">
                 Youtube
                 <sup className = " text-xs absolute top-3">TM</sup>
               </span>
             </div>

        </div>

        <div className = "flex items-center justify-center gap-5 " > 
            <form action="" >
                <div>
                    <div className = "flex ">
                        <input type="text" placeholder = "Search" className = " text-2xl rounded-l-xl pl-2 border-2 border-solid border-white bg-black"/>
                        <div className = "bg-[#000000] rounded-r-xl text-2xl border-2 border-solid border-white px-2 py-2">
                        <IoSearchSharp className = " size-7 "/>
                        </div>
                    </div>
                </div>
            </form>

            <div>
            <MdKeyboardVoice className = "text-3xl bg"/ >
            </div>
        </div>

        <div className = "flex gap-5 items-center justify-center">
            <div>
            <RiVideoAddFill className = "text-2xl"/>
            </div>

            <div>
            <FaBell className = "text-2xl relative"/>
            <span className = "absolute top-1 right-11   bg-red-500 rounded-3xl">9+</span>
            </div>

            <div>
                <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="profile_image" className = "rounded-3xl size-10" />
            </div>
            
        </div>


    </div>
  )
}
