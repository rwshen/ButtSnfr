'use client'

import React, { useCallback, useState, useEffect } from 'react'

export const Register = () => {
  const [dogName, setDogName] = useState < string > ('')
  const [humanName, setHumanName] = useState < string > ('')
  const [address, setAddress] = useState < string > ('')
  const [email, setEmail] = useState < string > ('')
  const [password, setPassword] = useState < string > ('')
  const [confirmPassword, setConfirmPassword] = useState < string > ('')

  useEffect(() => {
  }, [])

  const submitForm = useCallback((e) => {
    e.preventDefault
    fetch('http://localhost:3000').then(response => response.json()).then(data => console.log(data))
  }, [])

  return (
    <div className='flex mt-40'>
      <label className='flex flex-col'>
        <label className='pr-4'>Dog&apos;s Name:</label>
        <input className='mb-4' name="dog_name" type='text' placeholder='Jojo' value={dogName} onChange={e => setDogName(e.currentTarget.value)} />

        <label className='pr-4'>Human&apos;s Name:</label>
        <input className='mb-4' name="first_name" type='text' placeholder='Human of Jojo' value={humanName} onChange={e => setHumanName(e.currentTarget.value)} />

        <label className='pr-4'>Jojo&apos;s Address:</label>
        <input className='mb-4' type='text' name="address" placeholder='Crate address' value={address} onChange={e => setAddress(e.currentTarget.value)} />

        <label className='pr-4'>Human&apos;s Email:</label>
        <input className='mb-4' name="email" type='text' placeholder='Email' value={email} onChange={e => setEmail(e.currentTarget.value)} />

        <label className='pr-4'>Create a password</label>
        <input className='mb-2' name="password" type='text' placeholder='password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
        <label className='pr-4'>Confirm password</label>
        <input className='mb-20' name="confirm_password" type='text' placeholder='password' value={confirmPassword} onChange={e => setConfirmPassword(e.currentTarget.value)} />

        <button className='hover:text-yellow' onClick={(e) => submitForm(e)}>Submit</button>
      </label>
    </div>
  )
}
