// import React from 'react'
import { IoMdHome } from "react-icons/io";
import { BiSolidVideos } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";
import { CgPlayList } from "react-icons/cg";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";



export default function Sidebar() {

    const mainLinks = [{
        icon : <IoMdHome className = "text-2xl"/>,
        name : "Home"
    },
    {
        icon : <BiSolidVideos className = "text-2xl"/>,
        name : "Shorts"
    },
    {
        icon : <MdSubscriptions className = "text-2xl"/>,
        name : "Subscriptions"
    }
]

const otherLinks = [
    {
        icon : <RiHistoryFill className = "text-2xl"/>,
        name : "History"
    },
    {
        icon : <CgPlayList className = "text-2xl"/>,
        name : "Playlist"
    },
    {
        icon : <MdOutlineWatchLater className = "text-2xl"/>,
        name : "WatchLater"
    },
    {
        icon : <AiOutlineLike className = "text-2xl"/>,
        name : "Liked"
    }
]

  return (
    <div className = " bg-gray-800 w-2/12 pr-5 overflow-auto pb-8 h-screen opacity-70">
        
        <ul className = " flex flex-col border-b-2 border-gray-400">
            {mainLinks.map(({icon,name})=>{
                return (
                    <li key={name} className = "pl-6 py-3 hover:bg-zinc-600 ">
                        <a href="#" className = "flex items-center gap-5">
                            {icon}
                            <span className = " text-sm tracking-wider">{name}</span>
                        </a>
                    </li>
                )
            }
        )}
        </ul>

        <ul className = " flex flex-col border-b-2 border-gray-400 ">
            {otherLinks.map(({icon,name})=>{
                return (
                    <li key={name} className = "pl-6 py-3 hover:bg-zinc-600">
                        <a href="#" className = "flex items-center gap-5">
                            {icon}
                            <span className = " text-sm tracking-wider">{name}</span>
                        </a>
                    </li>
                )
            }
        )}
        </ul>
    </div>
  )
}
