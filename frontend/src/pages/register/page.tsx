'use client'

import React, {useState} from 'react';

export default function Register(){
    const [dogName, setDogName] = useState<string>('')

    return (
        <div>
            <input name="query" placeholder="Dog's name" value={dogName} onChange={e => setDogName(e.currentTarget.value)}/>
        </div>
    )
}