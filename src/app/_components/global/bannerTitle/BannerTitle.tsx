import Image from 'next/image';
import { replace } from 'ramda'
import React from 'react'

export type BannerTitleType = {
    title: string,
    img: string
    alt: string
}

export default function BannerTitle({ title, img, alt }: BannerTitleType) {
    const imgPath = `/img/banner/${img}`;
   
  return (
    <div className="relative flex items-stretch h-40">
      <Image
        src={imgPath}
        alt={alt}
        fill={true}
        className='object-cover object-center'
      />
      <h1 className='flex justify-center items-center w-full bg-black opacity-50 text-white text-4xl font-bold'>
          { title }
      </h1>
    </div>
  )
}
