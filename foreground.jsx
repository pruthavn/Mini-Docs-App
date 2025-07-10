import React, {useRef, useState} from 'react'
import Card from "./card"


function foreground() {

  const ref =  useRef(null)
  const data = [
    {
      desc: "This is a card",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "green"},
    },
    {
      desc: "This is a card",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "blue"},
    },
    {
      desc: "This is a card",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagcolor: "green"},
    },
    
  ]
  return (
    
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card data={item} reference={ref}/>
      ))}
    </div>
    
  )
}

export default foreground
