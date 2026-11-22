import React from 'react'
import { useParams } from 'react-router-dom'

function user() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-400 text-white text-3xl p-4 align-middle items-center justify-center flex-item-center'>user: {userid}</div>
  )
}

export default user