import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex h-screen w-full'>
      <div className='m-auto'>
        <Link href="/normal-list">
          <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            List Normal Images
          </button>
        </Link>
        <Link href="/image-kit">
          <button type="button" className="text-gray-900 bg-blue border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-800 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-600 dark:focus:ring-gray-700">
          List With Image Kit Io
          </button>
        </Link>
      </div>
    </div>
  )
}
