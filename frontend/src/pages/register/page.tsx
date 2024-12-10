'use client'

import React, { useCallback, useState } from 'react'

export default function Register () {
  const [dogName, setDogName] = useState < string > ('')
  const [humanName, setHumanName] = useState < string > ('')
  const [address, setAddress] = useState < string > ('')

  const submitForm = useCallback((e) => { e.preventDefault; console.log('hi') }, [])

  return (
    <div className='mt-40'>
      <form className='flex flex-col '>
        <label className='pr-4'>Dog&apos;s Name:</label>
        <input className='pb-4' name='query' type='text' placeholder='Jojo' value={dogName} onChange={e => setDogName(e.currentTarget.value)} />

        <label className='pr-4'>Human&apos;s Name:</label>
        <input className='pb-4' name='query' type='text' placeholder='Human of Jojo' value={humanName} onChange={e => setHumanName(e.currentTarget.value)} />

        <label className='pr-4'>Jojo&apos;s Address:</label>
        <input className='pb-20' name='query' type='text' placeholder='Crate address' value={address} onChange={e => setAddress(e.currentTarget.value)} />
        <button onClick={(e) => submitForm(e)}>Submit</button>
      </form>
    </div>
  )
}
