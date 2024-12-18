'use client'

import React, { useCallback, useEffect, useState } from 'react'

export const Register = () => {
  const [dogName, setDogName] = useState<string>('')
  const [humanName, setHumanName] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [stateAddress, setStateAddress] = useState<string>('')
  const [cityAddress, setCityAddress] = useState<string>('')

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const oAuthRequest = useCallback(async () => {

    
    const myHeaders = new Headers();

    
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

    const credentials = `${process.env.username}:${process.env.password}`;
    const encodedCredentials = btoa(credentials);

    myHeaders.append('Proxy-Authorization', `Basic ${encodedCredentials}`,)
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
      "grant_type": "client_credentials",

    }),
    };
    
    return await fetch(`https://gate.smartproxy.com:10001/https://api.usps.com/oauth2/v3/token`, requestOptions)
    .then(response => {
      if (!response.ok) {
          // Crucial: Get the error details from the response body.
          console.log(response)
      }
      return response.json();
  })
  .then(data => {
      // Handle successful response
      console.log("OAuth Token:", data);
  })
  .catch(error => {
      console.error("OAuth Request Error:", error);
  });
      // .then(response => response)
  }, [])

  const validateAddress = useCallback(async (address, stateAddress, cityAddress) => {
    const token = await oAuthRequest()

    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`)

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      mode: 'no-cors' as const,
    }
    const response = await fetch(`https://api.usps.com/addresses/v3/address?streetAddress=${address}&state=${stateAddress}&city=${cityAddress}`, requestOptions)
      .then(response => response)
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    console.log(response)
    return response
  }, [oAuthRequest])

  const submitForm = useCallback(async (e) => {
    e.preventDefault();
    const validAddress = await validateAddress(address, stateAddress, cityAddress)
    console.log(await validAddress)
    // await fetch('http://127.0.0.1:8080/api/register', {
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
