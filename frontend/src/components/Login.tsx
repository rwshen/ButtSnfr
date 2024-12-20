import React, { useState, useCallback } from 'react'
export const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const submit = useCallback(async (e) => {
    e.preventDefault()

    const myHeaders = new Headers()

    return await fetch(':8080/api/login', {
      method: 'POST',
      body: JSON.stringify({
        password,
        email
      }),
      headers: myHeaders,
    })
  }, [email, password])

  return (
    <div className='flex mt-40'>
      <form className='flex flex-col' onSubmit={submit}>
        <label className='mb-4 font-bold'>Please sign in</label>

        <label className='pr-4'>Email</label>
        <input className='mb-4' type='email' placeholder='email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
        <label className='pr-4'>Password</label>
        <input className='mb-20' type='password' placeholder='password' value={password} onChange={e => setPassword(e.currentTarget.value)} />

        <button className='hover:text-yellow' type='submit'>Submit</button>
      </form>
    </div>
  )
}
