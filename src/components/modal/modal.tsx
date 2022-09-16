import React from 'react'

function modal() {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-dark-overlay fixed top-0 left-0'>
      <div className='w-[250px] h-[250px] bg-white rounded-md py-4 px-5'>
        <h3 className='font-semibold '>Delete comment</h3>
        <p className='py-3 text-gray-500'>
          Are you sure you want to delete this comment? This will remove and cannot be undone.
        </p>
        <div className='flex items-center'>
          <button className='bg-gray-500 text-white rounded-md uppercase py-3 px-6'>No, cancel</button>
          <button className='bg-red-500 text-white rounded-md uppercase py-3 px-6'>yes, delete</button>
        </div>
      </div>
    </div>
  )
}

export default modal