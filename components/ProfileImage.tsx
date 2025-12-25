'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ProfileImage() {
  const [imgError, setImgError] = useState(false)
  const [imgSrc, setImgSrc] = useState('/jayesh.jpg')

  const handleError = () => {
    // Try different formats
    if (imgSrc.endsWith('.jpg')) {
      setImgSrc('/jayesh.png')
    } else if (imgSrc.endsWith('.png')) {
      setImgSrc('/jayesh.jpeg')
    } else if (imgSrc.endsWith('.jpeg')) {
      setImgSrc('/jayesh.webp')
    } else {
      setImgError(true)
    }
  }

  if (imgError) {
    return (
      <div className="w-[280px] h-[280px] rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center shadow-2xl">
        <div className="text-center p-4">
          <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">
            Add your photo as
          </p>
          <p className="text-gray-800 dark:text-gray-100 font-semibold mt-1">
            public/jayesh.jpg
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div className="w-[280px] h-[280px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700">
        <Image
          src={imgSrc}
          alt="Jayesh Velivela"
          width={280}
          height={280}
          className="rounded-2xl object-cover w-full h-full"
          priority
          onError={handleError}
        />
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 -z-10 blur-2xl"></div>
    </div>
  )
}

