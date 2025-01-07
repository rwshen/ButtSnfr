'use client'

import React, { useCallback, useState } from 'react'
import { createProxyMiddleware } from "http-proxy-middleware"; // @2.0.6


export const Register = ({ token }) => {
  const [dogName, setDogName] = useState<string>('')
  const [humanName, setHumanName] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [stateAddress, setStateAddress] = useState<string>('')
  const [cityAddress, setCityAddress] = useState<string>('')

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const validateAddress = useCallback(async (address, stateAddress, cityAddress) => {
    const myHeaders = new Headers();
    console.log(process.env.NEXT_PUBLIC_SMART_PROXY)
    myHeaders.append("Authorization", `Bearer ${token}`)
    myHeaders.append("Access-Control-Allow-Origin", "/");

    const proxyAgent = createProxyMiddleware({
      target: process.env.NEXT_PUBLIC_SMART_PROXY,
      secure: false,
      pathRewrite: { "^/api/proxy": "" }, // remove `/api/proxy` prefix
    });

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow' as const,
      credentials: 'include' as const,
      agent: proxyAgent
    };

    const API_URL = `https://api.usps.com/addresses/v3/address?streetAddress=${address}&state=${stateAddress}&city=${cityAddress}`

    return await fetch(`${API_URL}`, requestOptions)
      .then(response => console.log(response))
      .then(result => console.log(result))
    // .catch(error => console.log('error', error));
  }, [])


  const submitForm = useCallback(async (e) => {
    e.preventDefault();
    const validAddress = await validateAddress(address, stateAddress, cityAddress)
    console.log(await validAddress)
    // await fetch('${process.env.SMART_PROXY}/http://127.0.0.1:8080/api/register', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     first_name: humanName,
    //     dog_name: dogName,
    //     address: validAddress,
    //     password,
    //     email
    //   })
    // }).then(response => {
    //   if (!response.ok) {
    //     console.log('error')
    //   }
    //   console.log(response)
    //   return response
    // })
  }, [address, cityAddress, stateAddress, validateAddress])




  return (
    <div className='flex mt-40'>
      <label className='flex flex-col'>
        <label className='pr-4'>Dog&apos;s Name:</label>
        <input className='mb-4' name='dog_name' type='text' placeholder='Jojo' value={dogName} onChange={e => setDogName(e.currentTarget.value)} />

        <label className='pr-4'>Human&apos;s Name:</label>
        <input className='mb-4' name='first_name' type='text' placeholder='Human of Jojo' value={humanName} onChange={e => setHumanName(e.currentTarget.value)} />

        <label className='pr-4'> Crate street address</label>
        <input className='mb-4' name='first_name' type='text' placeholder='Crate Address' value={address} onChange={e => setAddress(e.currentTarget.value)} />
        <label className='pr-4'> Crate city address</label>
        <input className='mb-4' name='first_name' type='text' placeholder='Crate Address' value={cityAddress} onChange={e => setCityAddress(e.currentTarget.value)} />
        <label className='pr-4'> Crate state address</label>
        <input className='mb-4' name='first_name' type='text' placeholder='Crate Address' value={stateAddress} onChange={e => setStateAddress(e.currentTarget.value)} />

        {/* <label className='pr-4'>Human&apos;s Email:</label>
        <input className='mb-4' name='email' type='text' placeholder='Email' value={email} onChange={e => setEmail(e.currentTarget.value)} />

        <label className='pr-4'>Create a password</label>
        <input className='mb-2' name='password' type='password' placeholder='password' value={password} onChange={e => setPassword(e.currentTarget.value)} />
        <label className='pr-4'>Confirm password</label>
        <input className='mb-20' name='confirm_password' type='password' placeholder='password' value={confirmPassword} onChange={e => setConfirmPassword(e.currentTarget.value)} /> */}

        <button className='hover:text-yellow' onClick={async (e) => await submitForm(e)}>Submit</button>
      </label>
    </div>
  )
}
function getOAuthToken() {
  throw new Error('Function not implemented.');
}

