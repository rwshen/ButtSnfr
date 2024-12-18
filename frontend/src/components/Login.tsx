import React, { useState, useCallback } from 'react'
export const LoginForm = () => {
  const [email, setEmail] = useState < string > ('')
  const [password, setPassword] = useState < string > ('')

  const submit = useCallback(async (e) => {
    e.preventDefault()

    const myHeaders = new Headers()
    // want the cookies from the backend
    myHeaders.append('withCredentials', 'true')

    const {formData} = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      body: JSON.stringify({
        password,
        email
      }),
      headers: myHeaders,
      redirect: 'follow'
    })
    console.log(formData)
  }, [email, password])

  return (
    <div className='flex mt-40'>
      <label>Please sign in</label>
      <form className='flex flex-col' onSubmit={submit}>
        <label className='pr-4'>Email</label>
        <input className='mb-4' type='email' placeholder='email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
        <label className='pr-4'>Password</label>
        <input className='mb-20' type='password' placeholder='password' value={password} onChange={e => setPassword(e.currentTarget.value)} />

        <button className='hover:text-yellow' type='submit'>Submit</button>
      </form>
    </div>
  )
}
