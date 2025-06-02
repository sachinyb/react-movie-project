import React, { useState } from 'react'
import UserList from './UserList';

const UseEffctClassParnt = () => {
    const [searchTerm,setSearchTerm]=useState('');
  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold text-center'>useEffect</h1>
        <input type="text" placeholder='Search By name'className='w-full border p-2 rounded mb-4' onChange={(e)=>setSearchTerm(e.target.value)}/>
        <UserList searchTerm={searchTerm}/>

    </div>
  )
}

export default UseEffctClassParnt
