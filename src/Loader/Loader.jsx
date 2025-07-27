import React from 'react'
import { PulseLoader } from 'react-spinners'

export default function Loader() {
  return (
    <div className='h-screen flex justify-center items-center'>
 <PulseLoader color="#ADFF2F"  size={40} />
    </div>
  )
}
