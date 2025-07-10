import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference})  {
  return (
    <motion.div drag dragConstraints={reference} whileDrag = {{scale: 1.2}} dragElastic={0.1} dragTransition={{bounceStiffness: 600, bounceDamping: 10}} className='relative flex-shrink-0 w-48 h-64 rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full  left-0'>
        <div className='flex items-center justify-between py-3 px-8  mb-2'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoClose /> : <FiDownload size = ".8em" color="#fff"/>}
            </span>
        </div>
        {
         data.tag.isOpen && (
           <div className={`tag w-full py-3 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
          <h3 className='text-xs font-semibold '>{data.tag.tagTitle}</h3>
        </div>
         )
        }
       
    </div>
    </motion.div>
  )
}

export default Card
